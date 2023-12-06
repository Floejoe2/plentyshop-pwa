import type { Ref } from 'vue';
import type { CategoryTreeItem } from '@plentymarkets/shop-api';

export interface UseMegaMenuState {
  isOpen: boolean;
  activeNode: number[];
  category: CategoryTreeItem | null;
}

// export type GetLegalInformation = (params: LegalTextsParams) => Promise<LegalInformationResponse>;
export type OpenMegaMenu = () => void;
export type CloseMegaMenu = () => void;

export interface UseMegaMenuMethods {
  isOpen: Readonly<Ref<UseMegaMenuState['isOpen']>>;
  activeNode: Ref<UseMegaMenuState['activeNode']>;
  category: Ref<UseMegaMenuState['category']>;
  open: OpenMegaMenu;
  close: CloseMegaMenu;
}

export type UseMegaMenuReturn = () => UseMegaMenuMethods;
