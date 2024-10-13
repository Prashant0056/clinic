import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from 'embla-carousel-autoplay';

const HomeCarousel = () => {
    const images = ['/images/carousel/image-1.jpg', '/images/carousel/image-2.jpg', '/images/carousel/image-3.jpg'];

    return (
        <div className="h-full">
            <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 4000 })]}>
                <CarouselContent>
                    {
                        images.map((item, index) => {
                            return (
                                <CarouselItem key={index}>
                                    <div className="relative w-full h-[25vh]"> 
                                        <Image 
                                            src={item} 
                                            layout="fill" 
                                            objectFit="cover" 
                                            alt={`Carousel image ${index}`} 
                                            priority={true}
                                        />
                                    </div>
                                </CarouselItem>
                            );
                        })
                    }
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export default HomeCarousel;
