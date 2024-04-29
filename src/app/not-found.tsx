import Navbar from "@/components/global/Navbar";
import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import Header from "@/components/shared/Header";
import Image from "next/image";
import ErrorImage from "../../public/images/error.png";

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <Container className="mt-36">
        <Image
          src={ErrorImage}
          width={300}
          height={300}
          alt="404 image of a scarecrow"
          aria-hidden={true}
          className="block mb-6"
        />
        <Header
          title="Error 404"
          description="The page you requested for is not available on this site. Kindly use the button below to go back."
        >
          <Button url="/" text="Go Back" />
        </Header>
      </Container>
    </main>
  );
}
