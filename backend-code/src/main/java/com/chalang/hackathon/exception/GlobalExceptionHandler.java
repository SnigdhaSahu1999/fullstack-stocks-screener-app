package com.chalang.hackathon.exception;

import java.util.Date;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.ServletWebRequest;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@Slf4j
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

  @Order(Ordered.HIGHEST_PRECEDENCE)
  @ExceptionHandler(value = {BadRequestException.class,
      IllegalArgumentException.class, NumberFormatException.class})
  public ResponseEntity<ErrorMessage> handleBadRequestEx(
      RuntimeException ex, WebRequest request) {

    HttpStatus httpStatus = HttpStatus.BAD_REQUEST;
    ErrorMessage errMsg = getErrorMsg(httpStatus, ex, request);

    return new ResponseEntity<>(errMsg, httpStatus);
  }

  private static ErrorMessage getErrorMsg(
      HttpStatus httpStatus, Exception ex, WebRequest request) {

    log.error("Exception occurred", ex);
    return ErrorMessage.builder()
        .error(httpStatus.getReasonPhrase())
        .status(httpStatus.value())
        .message(ex.getMessage())
        .timestamp(new Date())
        .path(((ServletWebRequest) request).getRequest().getRequestURI())
        .build();
  }

}
