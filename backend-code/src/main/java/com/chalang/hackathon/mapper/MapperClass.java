package com.chalang.hackathon.mapper;
import com.chalang.hackathon.dto.LivePriceDto;
import com.chalang.hackathon.dto.StockDataDto;
import com.chalang.hackathon.entity.StockData;
import com.chalang.hackathon.exception.BadRequestException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;


@Mapper(componentModel = "spring")
public abstract class MapperClass {

  public abstract List<StockData> toEntity(List<StockDataDto> stockDataDtos);

  @Mapping(target = "livePriceDto",
      expression = "java(getConfig(stockDataDto.getLivePriceDto()))")
  public abstract StockData toEntity(StockDataDto stockDataDto);


  public abstract List<StockDataDto> toResources(List<StockData> data);

  @Mapping(target = "livePriceDto",
      expression = "java(getConfigData(data.getLivePriceDto()))")
  public abstract StockDataDto toResource(StockData data);


  protected LivePriceDto getConfigData(String livePriceDto){
    ObjectMapper OBJECT_MAPPER = new ObjectMapper();

    try {
      return OBJECT_MAPPER.readValue(livePriceDto, LivePriceDto.class);
    } catch (Exception var3) {
      throw new BadRequestException("Exception occurred while processing JSON", var3);
    }
  }

  protected String getConfig(LivePriceDto price)  {
    ObjectMapper OBJECT_MAPPER = new ObjectMapper();
    try {
      return  OBJECT_MAPPER.writeValueAsString(price);
    } catch (Exception var2) {
      throw new BadRequestException("Exception occurred while processing JSON", var2);
    }
  }

}
