import "./category-menu.style.scss";
import CategoryItem from "../category-item/category-item.component";

const CategoryMenu = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl:
        "https://i.etsystatic.com/33147827/r/il/736176/3672808872/il_794xN.3672808872_3xsp.jpg",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl:
        "https://www.comicsense.in/wp-content/uploads/2021/03/sharingan_lens_sweatshirt_blk_compressed.jpg",
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl:
        "https://i.etsystatic.com/5786997/r/il/220dab/3862282175/il_794xN.3862282175_4uj1.jpg",
    },
    {
      id: 4,
      title: "Womens",
      imageUrl: "https://wallpapercave.com/wp/wp5641010.png",
    },
    {
      id: 5,
      title: "Mens",
      imageUrl:
        "https://c4.wallpaperflare.com/wallpaper/334/662/534/anime-attack-on-titan-attack-on-titan-levi-ackerman-wallpaper-preview.jpg",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryMenu;
