package com.apigateway.config;

import org.springframework.cloud.gateway.server.mvc.filter.BeforeFilterFunctions;
import org.springframework.cloud.gateway.server.mvc.handler.GatewayRouterFunctions;
import org.springframework.cloud.gateway.server.mvc.handler.HandlerFunctions;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.function.RequestPredicates;
import org.springframework.web.servlet.function.RouterFunction;
import org.springframework.web.servlet.function.ServerResponse;

@Configuration
public class GatewayConfiguration {
    @Bean
    public RouterFunction<ServerResponse> eureka(){
        return GatewayRouterFunctions
                .route("eureka-service")
                .route(
                        RequestPredicates.path("/eureka/**"),
                        HandlerFunctions.http("http://discovery-service:8761")
                )
                .build();
    }

    private RouterFunction<ServerResponse> genRoute(String serviceName){
        return GatewayRouterFunctions
                .route(serviceName)
                .route(
                        RequestPredicates.path("/api/" + serviceName),
                        HandlerFunctions.http("http://" + serviceName + ":8080")
                )
                .before(BeforeFilterFunctions.rewritePath("/api/" + serviceName, "/graphql"))
                .build();
    }

    @Bean
    public RouterFunction<ServerResponse> authentication(){
        return genRoute("authentication-service");
    }
}
