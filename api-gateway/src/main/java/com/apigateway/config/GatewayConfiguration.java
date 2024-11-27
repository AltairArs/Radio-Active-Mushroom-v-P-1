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
                        RequestPredicates.path("/**"),
                        HandlerFunctions.http("http://discovery-service:8761")
                )
                //.before(BeforeFilterFunctions.rewritePath("/eureka", "/"))
                .build();
    }
}
