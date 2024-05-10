interface IStockDetails {
    header: Header;
    details: Details;
    brandDtos: BrandDto[];
    stats: Stats;
    fundamentals: Fundamental[];
    shareHoldingPattern: { [key: string]: ShareHoldingPattern };
    fundsInvested: FundInvested[];
    priceData: PriceData;
    financialStatement: FinancialStatement[];
    expertRating: ExpertRating;
    similarAssets: SimilarAssets;
}

interface Header {
    searchId: string;
    growwCompanyId: string;
    isin: string;
    industryId: number;
    industryName: string;
    displayName: string;
    shortName: string;
    type: string;
    isFnoEnabled: boolean;
    nseScriptCode: string;
    bseScriptCode: string;
    isBseTradable: boolean;
    isNseTradable: boolean;
    logoUrl: string;
    floatingShares: number;
    isBseFnoEnabled: boolean;
    isNseFnoEnabled: boolean;
}

interface Details {
    fullName: string;
    parentCompany: string;
    headquarters: string;
    ceo: string;
    managingDirector: string;
    foundedYear: number;
    businessSummary: string;
    websiteUrl: string;
}

interface BrandDto {
    name: string;
    logoUrl: string;
}

interface Stats {
    marketCap: number;
    pbRatio: number;
    peRatio: number;
    divYield: number;
    bookValue: number;
    epsTtm: number;
    roe: number;
    industryPe: number;
    cappedType: string;
    dividendYieldInPercent: number;
    faceValue: number;
    returnOnAssets: number;
    operatingProfitMargin: number;
    netProfitMargin: number;
    evToSales: number;
    evToEbitda: number;
    earningsYield: number;
    sectorPb: number;
    sectorDivYield: number;
    sectorRoe: number;
    sectorRoce: number;
    priceToOcf: number;
    priceToFcf: number;
    roic: number;
    pePremiumVsSector: number;
    pbPremiumVsSector: number;
    divYieldVsSector: number;
    sectorPe: number;
    priceToSales: number;
    pegRatio: number;
}

interface Fundamental {
    name: string;
    shortName: string;
    value: string;
}

interface ShareHoldingPattern {
    promoters: PromoterDetails;
    mutualFunds: PercentageValue;
    otherDomesticInstitutions: OtherDomesticInstitutions;
    foreignInstitutions: PercentageValue;
    retailAndOthers: PercentageValue;
}

interface PromoterDetails {
    individual: PercentageValue;
    government: PercentageValue;
    corporation: PercentageValue;
}

interface PercentageValue {
    percent: number;
}

interface OtherDomesticInstitutions {
    insurance: PercentageValue;
    otherFirms: PercentageValue;
}

interface FundInvested {
    name: string;
    searchId: string;
    investedAumPercent: number;
    rating: number;
    return3y: number;
    return1y: number;
    return5y: number;
    logoUrl: string;
}

interface PriceData {
    nse: YearPrice;
    bse: YearPrice;
}

interface YearPrice {
    yearLowPrice: number;
    yearHighPrice: number;
}

interface FinancialStatement {
    title: string;
    yearly: { [key: string]: number };
    quarterly: { [key: string]: number };
}

interface ExpertRating {
    buyCount: number;
    sellCount: number;
    holdCount: number;
    buyPercent: number;
    sellPercent: number;
    holdPercent: number;
}

interface SimilarAssets {
    type: string;
    size: number;
    peerList: Peer[];
}

interface Peer {
    companyHeader: Header; 
    nseYearLow: number;
    nseYearHigh: number;
    bseYearLow: number;
    bseYearHigh: number;
    marketCap: number;
    peRatio: number;
    pbRatio: number;
}
