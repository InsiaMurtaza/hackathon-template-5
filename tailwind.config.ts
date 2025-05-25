import type { Config } from "tailwindcss";

const config: Config = {
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			customecolor: '#23A6F0',
  			navbarcolor: '#252B42',
  			linkcolor: '#737373',
  			footercolor: '#FAFAFA',
  			footercolumncolor: '#FFFFFF',
  			pricecolor: '#BDBDBD',
  			pricegreencolor: '#23856D',
  			
  	},
	  backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 14.58%, rgba(56, 56, 56, 0.84) 100%)',
      },
  },
  plugins: [],
}
};
export default config;
