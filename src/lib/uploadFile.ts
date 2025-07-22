import axios from "axios";
export async function uploadFileToServer(file: File) {
  const formData = new FormData();
  formData.append("file", file);
  console.log("uploading to server file");
  formData.append("fileType", file.type); // <-- send fileType

  try {
    const res = await axios.post(
      process.env.NEXT_PUBLIC_UPLOAD_API_URL!,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(res.data);
    return { status: true, public_id: res.data.public_id, url: res.data.url };
  } catch (err) {
    console.log(err);
    return { status: false, message: "Failed to upload please try again" };
  }
}
