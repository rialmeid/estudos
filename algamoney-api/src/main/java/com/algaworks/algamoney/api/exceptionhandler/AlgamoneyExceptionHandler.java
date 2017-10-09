package com.algaworks.algamoney.api.exceptionhandler;

import org.apache.commons.lang3.exception.ExceptionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@ControllerAdvice
public class AlgamoneyExceptionHandler extends ResponseEntityExceptionHandler {

    @Autowired
    private MessageSource messageSource;

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        List<Erro> erros = criarListaDeErros(ex.getBindingResult());
        return handleExceptionInternal(ex, erros, headers, HttpStatus.BAD_REQUEST, request);
    }

    @Override
    protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        String s = "mensagem.invalida";
        String exceptionMessage = ex.getCause() != null ? ex.getCause().toString() : ex.toString();
        HttpStatus httpStatus = HttpStatus.BAD_REQUEST;

        String mensagemUsuario = messageSource.getMessage(s, null, LocaleContextHolder.getLocale());
        String mensagemDesenvolvedor = exceptionMessage;
        List<Erro> erros = Arrays.asList(new Erro(mensagemUsuario, mensagemDesenvolvedor));
        ResponseEntity<Object> objectResponseEntity = handleExceptionInternal(ex, erros, headers, httpStatus, request);
        return objectResponseEntity;
    }


    @ExceptionHandler({EmptyResultDataAccessException.class})
    public ResponseEntity<Object> handleEmptyResultDataAccessException(EmptyResultDataAccessException ex, WebRequest request) {
        String s = "recurso.nao-encontrado";
        String exceptionMessage = ExceptionUtils.getRootCauseMessage(ex);
        HttpStatus httpStatus = HttpStatus.NOT_FOUND;

        String mensagemUsuario = messageSource.getMessage(s, null, LocaleContextHolder.getLocale());
        String mensagemDesenvolvedor = exceptionMessage;
        List<Erro> erros = Arrays.asList(new Erro(mensagemUsuario, mensagemDesenvolvedor));
        ResponseEntity<Object> objectResponseEntity = handleExceptionInternal(ex, erros, new HttpHeaders(), httpStatus, request);
        return objectResponseEntity;
    }

    //DataIntegrityViolationException
    @ExceptionHandler({DataIntegrityViolationException.class})
    public ResponseEntity<Object> handleDataIntegrityViolationException(DataIntegrityViolationException ex, WebRequest request) {
        String s = "recurso.operacao-nao-permitida";
        String exceptionMessage = ExceptionUtils.getRootCauseMessage(ex);
        HttpStatus httpStatus = HttpStatus.NOT_FOUND;

        String mensagemUsuario = messageSource.getMessage(s, null, LocaleContextHolder.getLocale());
        String mensagemDesenvolvedor = exceptionMessage;
        List<Erro> erros = Arrays.asList(new Erro(mensagemUsuario, mensagemDesenvolvedor));
        ResponseEntity<Object> objectResponseEntity = handleExceptionInternal(ex, erros, new HttpHeaders(), httpStatus, request);
        return objectResponseEntity;
    }

    private List<Erro> criarListaDeErros(BindingResult bindingResult) {
        List<Erro> erros = new ArrayList<Erro>();

        for (FieldError fieldError : bindingResult.getFieldErrors()) {
            String mensagemUsuario = messageSource.getMessage(fieldError, LocaleContextHolder.getLocale());
            String mensagemDesenvolvedor = fieldError.toString();
            erros.add(new Erro(mensagemUsuario, mensagemDesenvolvedor));
        }

        return erros;
    }

    public static class Erro {
        private String mensagemUsuario;
        private String mensagemDesenvolvedor;

        public Erro(String mensagemUsuario, String mensagemDesenvolvedor) {
            this.mensagemUsuario = mensagemUsuario;
            this.mensagemDesenvolvedor = mensagemDesenvolvedor;
        }

        public String getMensagemUsuario() {
            return mensagemUsuario;
        }

        public void setMensagemUsuario(String mensagemUsuario) {
            this.mensagemUsuario = mensagemUsuario;
        }

        public String getMensagemDesenvolvedor() {
            return mensagemDesenvolvedor;
        }

        public void setMensagemDesenvolvedor(String mensagemDesenvolvedor) {
            this.mensagemDesenvolvedor = mensagemDesenvolvedor;
        }
    }


}
