export default interface User {
  id: number;
  name: string;
  email: string;
  images: {
    url: string;
    width: number;
    height: number;
  }[];
}