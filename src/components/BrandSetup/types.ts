export type BrandId = 'hp' | 'canon' | 'brother' | 'epson';

export interface BrandSetupConfig {
  id: BrandId;
  brandName: string;
  brandTitle: string;
  brandLogo: string;
  brandLogoAlt: string;
  logoHeightClass: string;
  heroTitle: string;
  heroSubtitle: string;
  heroPrinterImage: string;
  heroPrinterAlt: string;
  contentPrinterImage: string;
  contentPrinterAlt: string;
  overlayStyle: string;
  buttonBg: string;
  buttonHoverBg: string;
  installText: string;
  helpText: string;
  showSupportLink?: boolean;
  supportLinkText?: string;
  sampleModels: string[];
  softwareName: string;
  downloadPrinterImage: string;
  supportPhone: string;
  brandColor: string;
}
