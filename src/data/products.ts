export const products = [
    {
      rank: 1,
      title: "WixPro 72-Inch Responsive Website Builder",
      company: "Builder 1",
      rating: 9.8,
      reviews: "Exceptional",
      description: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      highlights: [
        "[What you get]:",
        "Receive the WixPro website builder suite,",
        "access to premium design templates,",
        "an extensive library of widgets and apps,",
        "and detailed step-by-step guides."
      ],
      best_choice: true
    },
    {
      rank: 2,
      title: "SiteCraft 68-Inch Ultimate Web Design Studio",
      company: null,
      rating: 9.5,
      reviews: "Excellent",
      description: "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      highlights: [
        "[What you get]:",
        "Gain access to the SiteCraft design studio,",
        "featuring a robust selection of design elements,",
        "SEO optimization tools,",
        "and e-commerce integrations."
      ],
      best_value: true,
    },
    {
      rank: 3,
      title: "WixPro 72-Inch Responsive Website Builder",
      company: "Builder 1",
      rating: 9.8,
      reviews: "Exceptional",
      description: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      highlights: [
        "[What you get]:",
        "Receive the WixPro website builder suite,",
        "access to premium design templates,",
        "an extensive library of widgets and apps,",
        "and detailed step-by-step guides."
      ],
      best_choice: false
    },
    {
      rank: 4,
      title: "CDK Responsive Builder",
      company: "CDK",
      rating: 9.1,
      reviews: "",
      description: "Building Responsive, Cool, Docs",
      highlights: [
        { key: "Building Responsive", value: "9.9" },
        { key: "Cool", value: "8.9" },
        { key: "Docs", value: "8.9" },
        "Documentation",
        "Easy Use",
        "Out Of The Box"
      ]
    }
  ] 
  
  
export interface Product {
    rank: number;
    title: string;
    company: string | null;  
    rating: number | any; 
    reviews: string | any;
    description: string;
    highlights: (string | { key: string; value: string })[];
    best_choice?: boolean;
    best_value?: boolean;
  }
  