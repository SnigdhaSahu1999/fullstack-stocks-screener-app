package com.chalang.hackathon.dto;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class Details {

  private String fullName;
  private String parentCompany;
  private String headquarters;
  private String ceo;
  private String managingDirector;
  private String businessSummary;
  private String websiteUrl;
}
