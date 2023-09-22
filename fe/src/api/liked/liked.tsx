const changeProductLiked = async () => {
  const requestData = {
    isLiked: !isLiked,
  };
  const response = await privateApi.put(
    API_ENDPOINTS.UPDATE_LIKE(id),
    requestData
  );

  return response;
};

const useProductLikedMutation = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(changeProductLiked, {
    onSuccess: () => queryClient.invalidateQueries(QUERY_KEYS.PRODUCT_STAT(id)),
  });

  return { mutate };
};
