import React from 'react';
import { Upload, Modal, Button, message } from 'antd';
import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { TextInputContainer } from '../../../components/TextInput/TextInput';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const LRStepThree = () => {
  const uploader = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
  };
  const [image, setImage] = React.useState({
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
    fileList: [],
  });
  const handleCancel = () => setImage({ previewVisible: false });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setImage({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };

  const handleChange = ({ fileList }) => setImage({ fileList });

  return (
    <form className="flex flex-col space-y-4 my-6">
      <TextInputContainer label="Passport Photo (X4)">
        <div className="flex flex-row space-x-10">
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={image.fileList || []}
            onPreview={handlePreview}
            onChange={handleChange}
            accept="image/png, image/gif, image/jpeg"
          >
            {image?.fileList.length >= 4 ? null : (
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload Photo</div>
              </div>
            )}
          </Upload>
          <Modal
            visible={image.previewVisible}
            title={image.previewTitle}
            footer={null}
            onCancel={handleCancel}
          >
            <img
              alt="example"
              style={{ width: '100%' }}
              src={image.previewImage}
            />
          </Modal>
        </div>
      </TextInputContainer>
      <div className="flex md:flex-row flex-col">
        <TextInputContainer label="Upload Bank Statement">
          <div className="my-1">
            <Upload
              {...uploader}
              accept="application/pdf"
              onChange={(info) => {
                if (info.file.status !== 'uploading') {
                  console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                  message.success(
                    `${info.file.name} file uploaded successfully`
                  );
                } else if (info.file.status === 'error') {
                  message.error(`${info.file.name} file upload failed.`);
                }
              }}
            >
              <Button icon={<UploadOutlined />}>Bank Statement</Button>
            </Upload>
          </div>
        </TextInputContainer>
        <TextInputContainer label="Upload RRA Tax Returns">
          <div className="my-1">
            <Upload
              {...uploader}
              accept="application/pdf"
              onChange={(info) => {
                if (info.file.status !== 'uploading') {
                  console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                  message.success(
                    `${info.file.name} file uploaded successfully`
                  );
                } else if (info.file.status === 'error') {
                  message.error(`${info.file.name} file upload failed.`);
                }
              }}
            >
              <Button icon={<UploadOutlined />}>Tax Return</Button>
            </Upload>
          </div>
        </TextInputContainer>
      </div>
      <div className="flex md:flex-row flex-col">
        <TextInputContainer label="Credit History">
          <div className="my-1">
            <Upload
              {...uploader}
              accept="application/pdf"
              onChange={(info) => {
                if (info.file.status !== 'uploading') {
                  console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                  message.success(
                    `${info.file.name} file uploaded successfully`
                  );
                } else if (info.file.status === 'error') {
                  message.error(`${info.file.name} file upload failed.`);
                }
              }}
            >
              <Button icon={<UploadOutlined />}>Credit History</Button>
            </Upload>
          </div>
        </TextInputContainer>
        <TextInputContainer label="National ID card">
          <div className="my-1">
            <Upload
              {...uploader}
              accept="image/png, image/gif, image/jpeg"
              onChange={(info) => {
                if (info.file.status !== 'uploading') {
                  console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                  message.success(
                    `${info.file.name} file uploaded successfully`
                  );
                } else if (info.file.status === 'error') {
                  message.error(`${info.file.name} file upload failed.`);
                }
              }}
            >
              <Button icon={<UploadOutlined />}>National ID</Button>
            </Upload>
          </div>
        </TextInputContainer>
      </div>
    </form>
  );
};

export default LRStepThree;
