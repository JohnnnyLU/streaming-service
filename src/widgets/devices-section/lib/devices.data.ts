import type { ComponentType, SVGProps } from 'react';
import SmartphoneIcon from '../icons/smart-phone-icon.svg?react';
import TabletIcon from '../icons/tablet-icon.svg?react';
import SmartTVIcon from '../icons/smart-tv-icon.svg?react';
import LaptopIcon from '../icons/laptop-icon.svg?react';
import GamepadIcon from '../icons/gaming-console-icon.svg?react';
import VRHeadsetsIcon from '../icons/vr-headsets-icon.svg?react';

export type DeviceItem = {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const devices: DeviceItem[] = [
  {
    title: 'Smartphones',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    icon: SmartphoneIcon,
  },
  {
    title: 'Tablet',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    icon: TabletIcon,
  },
  {
    title: 'Smart TV',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    icon: SmartTVIcon,
  },
  {
    title: 'Laptops',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    icon: LaptopIcon,
  },
  {
    title: 'Gaming Consoles',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    icon: GamepadIcon,
  },
  {
    title: 'VR Headsets',
    description:
      'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store',
    icon: VRHeadsetsIcon,
  },
];
