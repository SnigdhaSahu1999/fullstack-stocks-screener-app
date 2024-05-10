package com.chalang.hackathon.dto;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Volume {


  public Double volumeValue;
  public  String companyName;
}
