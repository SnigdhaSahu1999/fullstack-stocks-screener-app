package com.chalang.hackathon.exception;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;

public class ErrorMessage {

  @JsonFormat(
      shape = JsonFormat.Shape.STRING,
      pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
      timezone = "GMT"
  )
  private Date timestamp;
  private int status;
  private String error;
  private String message;
  private String path;

  ErrorMessage(Date timestamp, int status, String error, String message, String path) {
    this.timestamp = timestamp;
    this.status = status;
    this.error = error;
    this.message = message;
    this.path = path;
  }

  public static ErrorMessageBuilder builder() {
    return new ErrorMessageBuilder();
  }

  public Date getTimestamp() {
    return this.timestamp;
  }

  public int getStatus() {
    return this.status;
  }

  public String getError() {
    return this.error;
  }

  public String getMessage() {
    return this.message;
  }

  public String getPath() {
    return this.path;
  }

  @JsonFormat(
      shape = JsonFormat.Shape.STRING,
      pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
      timezone = "GMT"
  )
  public void setTimestamp(Date timestamp) {
    this.timestamp = timestamp;
  }

  public void setStatus(int status) {
    this.status = status;
  }

  public void setError(String error) {
    this.error = error;
  }

  public void setMessage(String message) {
    this.message = message;
  }

  public void setPath(String path) {
    this.path = path;
  }

  public boolean equals(Object o) {
    if (o == this) {
      return true;
    } else if (!(o instanceof ErrorMessage)) {
      return false;
    } else {
      ErrorMessage other = (ErrorMessage)o;
      if (!other.canEqual(this)) {
        return false;
      } else if (this.getStatus() != other.getStatus()) {
        return false;
      } else {
        label61: {
          Object this$timestamp = this.getTimestamp();
          Object other$timestamp = other.getTimestamp();
          if (this$timestamp == null) {
            if (other$timestamp == null) {
              break label61;
            }
          } else if (this$timestamp.equals(other$timestamp)) {
            break label61;
          }

          return false;
        }

        label54: {
          Object this$error = this.getError();
          Object other$error = other.getError();
          if (this$error == null) {
            if (other$error == null) {
              break label54;
            }
          } else if (this$error.equals(other$error)) {
            break label54;
          }

          return false;
        }

        Object this$message = this.getMessage();
        Object other$message = other.getMessage();
        if (this$message == null) {
          if (other$message != null) {
            return false;
          }
        } else if (!this$message.equals(other$message)) {
          return false;
        }

        Object this$path = this.getPath();
        Object other$path = other.getPath();
        if (this$path == null) {
          if (other$path != null) {
            return false;
          }
        } else if (!this$path.equals(other$path)) {
          return false;
        }

        return true;
      }
    }
  }

  protected boolean canEqual(Object other) {
    return other instanceof ErrorMessage;
  }

  public int hashCode() {
    boolean PRIME = true;
    int result = 1;
    result = result * 59 + this.getStatus();
    Object $timestamp = this.getTimestamp();
    result = result * 59 + ($timestamp == null ? 43 : $timestamp.hashCode());
    Object $error = this.getError();
    result = result * 59 + ($error == null ? 43 : $error.hashCode());
    Object $message = this.getMessage();
    result = result * 59 + ($message == null ? 43 : $message.hashCode());
    Object $path = this.getPath();
    result = result * 59 + ($path == null ? 43 : $path.hashCode());
    return result;
  }

  public String toString() {
    return "ErrorMessage(timestamp=" + this.getTimestamp() + ", status=" + this.getStatus() + ", error=" + this.getError() + ", message=" + this.getMessage() + ", path=" + this.getPath() + ")";
  }

  public static class ErrorMessageBuilder {
    private Date timestamp;
    private int status;
    private String error;
    private String message;
    private String path;

    ErrorMessageBuilder() {
    }

    @JsonFormat(
        shape = JsonFormat.Shape.STRING,
        pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
        timezone = "GMT"
    )
    public ErrorMessageBuilder timestamp(Date timestamp) {
      this.timestamp = timestamp;
      return this;
    }

    public ErrorMessageBuilder status(int status) {
      this.status = status;
      return this;
    }

    public ErrorMessageBuilder error(String error) {
      this.error = error;
      return this;
    }

    public ErrorMessageBuilder message(String message) {
      this.message = message;
      return this;
    }

    public ErrorMessageBuilder path(String path) {
      this.path = path;
      return this;
    }

    public ErrorMessage build() {
      return new ErrorMessage(this.timestamp, this.status, this.error, this.message, this.path);
    }

    public String toString() {
      return "ErrorMessage.ErrorMessageBuilder(timestamp=" + this.timestamp + ", status=" + this.status + ", error=" + this.error + ", message=" + this.message + ", path=" + this.path + ")";
    }
  }
}
