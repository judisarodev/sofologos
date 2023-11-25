package com.judisarodev.sofologos.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public interface GlobalCorsConfig extends WebMvcConfigurer {
    @Override
    default void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("http://localhost:3000/")
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
