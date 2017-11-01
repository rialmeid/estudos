package com.algaworks.algamoney.api.event;

import com.algaworks.algamoney.api.resource.CategoriaResource;
import org.springframework.context.ApplicationEvent;

import javax.servlet.http.HttpServletResponse;

public class RecursoCriadoEvent extends ApplicationEvent {
    private final HttpServletResponse response;
    private final Long codigo;

    public RecursoCriadoEvent(Object resource, HttpServletResponse response, Long codigo) {
        super(resource);
        this.response = response;
        this.codigo = codigo;
    }

    public HttpServletResponse getResponse() {
        return response;
    }

    public Long getCodigo() {
        return codigo;
    }
}
