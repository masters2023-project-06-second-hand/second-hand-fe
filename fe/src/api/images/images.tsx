import { API_ENDPOINTS } from '@constants/endpoints';
import { multiFormApi, privateApi } from '..';
import { MAX_IMAGE_SIZE } from '@constants/constants';
import { useMutation } from '@tanstack/react-query';
import { ImgProps } from './type';

const uploadImage = async (file: FileList) => {
  if (file[0].size > MAX_IMAGE_SIZE) {
    return;
  }

  const formData = new FormData();
  formData.append('file', file[0]);

  const response = await multiFormApi.post(
    API_ENDPOINTS.POST_PRODUCT_IMG(),
    formData
  );

  return response.data;
};

export const usePostImgMutation = (
  uploadImg: (newImgData: ImgProps) => void
) => {
  const { mutate } = useMutation(uploadImage, {
    onSuccess: (data) => {
      uploadImg(data);
    },
  });

  return { mutate };
};

const deleteProductImg = async (imgId: number) => {
  const response = await privateApi.delete(
    API_ENDPOINTS.DELETE_PRODUCT_IMG(imgId)
  );
  return response;
};

export const useDeleteImgMutation = (deleteImg: (imgId: number) => void) => {
  const { mutate } = useMutation((imgId: number) => deleteProductImg(imgId), {
    onSuccess: (data, imgId) => {
      deleteImg(imgId);
    },
  });
  return { mutate };
};
