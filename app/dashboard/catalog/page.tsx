import CategorySlider from "@/components/dashboard/CategorySlider";

export default function CatalogPage() {
  // Category data structure
  const categories = [
    {
      title: "Grocery & Kitchen",
      items: [
        { name: "Vegetables & Fruits", image: "/assets/dashboard/catalog/cat_01.png" },
        { name: "Atta, Dal & Rice", image: "/assets/dashboard/catalog/cat_02.png" },
        { name: "Oil, Ghee & Masala", image: "/assets/dashboard/catalog/cat_03.png" },
        { name: "Dairy, Bread & Milk", image: "/assets/dashboard/catalog/cat_04.png" },
        { name: "Biscuits, Snacks & Chocolates", image: "/assets/dashboard/catalog/cat_05.png" },
        { name: "Dry Fruits & Cereals", image: "/assets/dashboard/catalog/cat_06.png" },
        { name: "Kitchen & Appliances", image: "/assets/dashboard/catalog/cat_07.png" },
        { name: "Tea & Coffee", image: "/assets/dashboard/catalog/cat_08.png" },
        { name: "Ice-Creams & Frozen Foods", image: "/assets/dashboard/catalog/cat_09.png" },
        { name: "Noodles, Sauces & Instant Food", image: "/assets/dashboard/catalog/cat_10.png" },
      ]
    },
    {
      title: "Snacks & Drinks",
      items: [
        { name: "Chips & Namkeens", image: "/assets/dashboard/catalog/cat_11.png" },
        { name: "Sweets & Chocolates", image: "/assets/dashboard/catalog/cat_12.png" },
        { name: "Drinks & Juices", image: "/assets/dashboard/catalog/cat_01.png" },
        { name: "Sauces & Spreads", image: "/assets/dashboard/catalog/cat_02.png" },
        { name: "Ready to Cook", image: "/assets/dashboard/catalog/cat_03.png" },
      ]
    },
    {
      title: "Household Essentials",
      items: [
        { name: "Cleaning Essentials", image: "/assets/dashboard/catalog/cat_04.png" },
        { name: "Detergents", image: "/assets/dashboard/catalog/cat_05.png" },
        { name: "Fresheners", image: "/assets/dashboard/catalog/cat_06.png" },
        { name: "Tissues & Rolls", image: "/assets/dashboard/catalog/cat_07.png" },
      ]
    }
  ];

  return (
    <div className="p-4 md:p-6 max-w-7xl mx-auto">
      {categories.map((category, index) => (
        <CategorySlider
          key={index}
          title={category.title}
          items={category.items}
        />
      ))}
    </div>
  );
}