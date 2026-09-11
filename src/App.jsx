import { Link } from "react-router"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// function CarouselDemo() {
//   return (
//     <Carousel opts={{loop:true}} plugins={[
//         Autoplay({
//           delay: 2000,
//         }),
//       ]} className="w-full max-w-3xl overflow-hidden">
//       <CarouselContent className={'ml-0'}>
//         <CarouselItem className={'pl-0'}>
//           <Image src={'https://plus.unsplash.com/premium_photo-1777558756044-aa5e0b090647?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
//         </CarouselItem>
//         <CarouselItem className={'pl-0'}>
//           <Image src={'https://images.unsplash.com/photo-1784036358153-bcbf60f16bbc?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
//         </CarouselItem>

//       </CarouselContent>
//       <CarouselPrevious className={'left-4'}/>
//       <CarouselNext className={'right-4'}/>
//     </Carousel>
//   )
// }

// const Image = ({src}) => {
//   return (
//     <div className="aspect-video  w-full overflow-hidden">
//       <img src={src} alt="Image" className="w-full object-cover"/>
//     </div>
//   )
// }

function CarouselDemo() {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 3000 })]}
      className="fixed inset-0 w-screen h-screen overflow-hidden z-0"
    >
      <CarouselContent className="h-full ml-0">
        <CarouselItem className="h-full pl-0">
          <Image src="https://plus.unsplash.com/premium_photo-1777558756044-aa5e0b090647?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </CarouselItem>
        <CarouselItem className="h-full pl-0">
          <Image src="https://images.unsplash.com/photo-1784036358153-bcbf60f16bbc?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </CarouselItem>
        <CarouselItem className="h-full pl-0">
          <Image src="https://images.unsplash.com/photo-1788382896963-ca49d752b135?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </CarouselItem>
        <CarouselItem className="h-full pl-0">
          <Image src="https://images.unsplash.com/photo-1785655140463-b7db6d270f83?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </CarouselItem>
        <CarouselItem className="h-full pl-0">
          <Image src="https://plus.unsplash.com/premium_photo-1784206742174-534040ea4c6a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </CarouselItem>
        <CarouselItem className="h-full pl-0">
          <Image src="https://images.unsplash.com/photo-1787767434057-aec0b3452e3a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </CarouselItem>
        <CarouselItem className="h-full pl-0">
          <Image src="https://plus.unsplash.com/premium_photo-1690440799957-38f180ab63c6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  )
}

const Image = ({ src }) => {
  return (
    <div className="w-full h-full overflow-hidden">
      <img
        src={src}
        alt="Image"
        className="w-full h-full object-cover"
        loading="eager"
      />
    </div>
  )
}

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 font-semibold transition-colors text-xl">
        {/* <Link to={'/game'} className="hover:text-red-400">Game</Link>
        <Link to={'/cards'} className="hover:text-red-400">All Cards</Link> */}
        <CarouselDemo />
    </div>
  )
}

export default App
