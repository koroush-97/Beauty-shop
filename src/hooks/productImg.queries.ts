// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { productImageService } from "../services/productImageService";

// export const useProductImages = (productId?: number | string) => {
//   return useQuery({
//     queryKey: ["product-images", productId],
//     queryFn: () =>
//       productImageService.getProductImages(productId as number | string),
//     enabled: !!productId,
//   });
// };

// export const useAddProductImage = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: ({
//       productId,
//       formData,
//     }: {
//       productId: number | string;
//       formData: FormData;
//     }) => productImageService.addProductImage(productId, formData),
//     onSuccess: (_data, variables) => {
//       queryClient.invalidateQueries({
//         queryKey: ["product-images", variables.productId],
//       });
//     },
//   });
// };

// export const useDeleteProductImage = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: (imageId: number | string) =>
//       productImageService.deleteProductImage(imageId),
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         queryKey: ["product-images"],
//       });
//     },
//   });
// };
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { productImageService } from "../services/productImageService";

// export const useProductImages = (productId?: number | string) => {
//   return useQuery({
//     queryKey: ["product-images", productId],
//     queryFn: () =>
//       productImageService.getProductImages(productId as number | string),
//     enabled: !!productId,
//   });
// };

// export const useAddProductImage = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: ({
//       productId,
//       imageUrl,
//     }: {
//       productId: number | string;
//       imageUrl: string;
//     }) => productImageService.addProductImage(productId, imageUrl),
//     onSuccess: (_data, variables) => {
//       // بروزرسانی کش تصاویر این محصول خاص
//       queryClient.invalidateQueries({
//         queryKey: ["product-images", variables.productId],
//       });
//     },
//   });
// };

// export const useDeleteProductImage = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: (imageId: number | string) =>
//       productImageService.deleteProductImage(imageId),
//     onSuccess: () => {
//       // کش کل تصاویر را نامعتبر می‌کنیم تا لیست‌ها بروز شوند
//       queryClient.invalidateQueries({
//         queryKey: ["product-images"],
//       });
//     },
//   });
// };
