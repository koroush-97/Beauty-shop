import { useCategories } from "../../hooks/category.queries";

export default function Test() {
  const { data: categories, isLoading, isError, error } = useCategories();

  console.log(categories);

  if (isLoading) {
    return <p>در حال دریافت دسته‌بندی‌ها...</p>;
  }

  if (isError) {
    console.error(error);
    return <p>خطا در دریافت دسته‌بندی‌ها</p>;
  }

  return (
    <div>
      <h1>تست دریافت دسته‌بندی‌ها</h1>

      {!categories || categories.length === 0 ? (
        <p>دسته‌بندی‌ای پیدا نشد.</p>
      ) : (
        <div>
          {categories.map((category) => (
            <div key={category.id} style={{ marginBottom: "16px" }}>
              <h2>{category.name}</h2>
              <p>Slug: {category.slug}</p>
              <p>Parent ID: {category.parent_id ?? "ندارد"}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
