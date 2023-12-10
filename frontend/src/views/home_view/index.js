import React, { useEffect, useState } from "react";
import { SearchBar } from "../../components/search_bar";
import { DropDownButton } from "../../components/drop_down_button";
import { HorizontalList } from "../../components/horizontal_list";
import { PostCard } from "../../components/post_card";
import { SingUpForm } from "../../components/sing-up-form";
import { ErrorMessage } from "../../components/error_message";
import './index.css';

const HomeView = () => {
    const [isSmall, setIsSmall] = useState();
    const [allPosts, setAllPosts] = useState([]);
    const [myPosts, setMyPosts] = useState(allPosts);
    const [error, setError] = useState(true);
    const [errorText, setErrorText] = useState("Cargando...");
    const [rows, setRows] = useState(6);
    const [numberPosts, setNumberPosts] = useState(0);
    const [categories, setCategories] = useState([]);
    const viewMoreStyle = {
        'color': rows < numberPosts ? '#303F9F' : 'gray',
        'pointer-events': rows < numberPosts ? 'auto' : 'none'
    };

    useEffect(()=>{
        fetch('http://localhost:9090/category/get-all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if(response.ok){
                return response.json();
            }
        })
        .then(data => {
            setCategories(data);
        })
        .catch((e) => {
            setError(true);
            setErrorText("Intentalo más tarde");
        });
    }, []);

    useEffect(() => {
        fetch(
            'http://localhost:9090/posts/get-number-of-posts/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if(response.ok){
                return response.json();
            }
        })
        .then((amount) => {
            setNumberPosts(amount);
        })
        .catch(error => {
            setError(true);
            setErrorText("Intentalo más tarde");
        });
    }, []);

    useEffect(() => {
        fetch(
            'http://localhost:9090/posts/get-all/' + rows , {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if(response.ok){
                setError(false);
                return response.json();
            }
        })
        .then((data) => {
            setAllPosts(data);
            setMyPosts(data);
        })
        .catch(error => {
            setError(true);
            setErrorText("Intentalo más tarde");
        });
    }, [rows]);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 992) {
                setIsSmall(true);
            } else {
                setIsSmall(false);
            }
          }
          window.addEventListener('resize', handleResize);
          handleResize();
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
    }, []);

    function removeAccents(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    const addRows = () => {
        setRows(rows+4);
        console.log("ROWS", rows, "AMOUNT", numberPosts);
    }

    const filterByTitle = (e) => {
        const text = e.target.value; 
        if(text){
            setMyPosts(allPosts.filter(p => 
                removeAccents(p.title.toLowerCase()).includes(removeAccents(text.toLowerCase()))
            ));
        }else{
            setMyPosts(allPosts);
        }
    }

    const filterByCategory = (e) => {
        const category = e.target.textContent; 
        setMyPosts(allPosts.filter(p => 
            p.category === category
        ));
    }

    return(
        <div className="container">
            <div className="row container--serching-bar">
                <div className="col-lg-8 col-md-12">
                    {!isSmall && <HorizontalList filterByCategory={filterByCategory} categories={categories}/> }
                </div>
                <div className="col-lg-4 col-md-12">
                    <SearchBar filterByTitle={filterByTitle}/>
                    {isSmall && <DropDownButton filterByCategory={filterByCategory} categories={categories}/>}
                </div>
            </div>

            {error ? <ErrorMessage text={errorText} /> : 
            <div className="row m-2">
                {myPosts.length > 0 && myPosts.map((info) => 
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center gap-2">
                        <PostCard info={info} />
                    </div> 
                )}

                {!myPosts.length && allPosts.map((info) => 
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center gap-2">
                        <PostCard info={info} />
                    </div> 
                )}
                <div className="view-more">
                    <p style={viewMoreStyle} onClick={addRows}>{'Ver más'}</p>
                </div>
            </div>
            }

            <SingUpForm /> 
        </div>
    );
}

export { HomeView }; 