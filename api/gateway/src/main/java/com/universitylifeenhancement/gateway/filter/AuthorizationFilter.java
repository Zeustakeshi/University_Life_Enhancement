/*
 *  AuthorizationFilter
 *  @author: Minhhieuano
 *  @created 10/14/2024 1:44 PM
 * */


package com.universitylifeenhancement.gateway.filter;

import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.stereotype.Component;

@Component
public class AuthorizationFilter extends  AbstractGatewayFilterFactory<AuthorizationFilter.Config>  {

    public AuthorizationFilter() {
        super(Config.class);
    }

    @Override
    public GatewayFilter apply(Config config) {
        return ((exchange, chain) -> {
            System.out.println("run filter");
            return chain.filter(exchange);
        });
    }


    public static class Config {

    }
}
