import Link from 'next/link';
import {AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillTwitterSquare} from 'react-icons/ai';
export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between gap-4 px-10">
        <header className="w-1/2 sticky top-0 max-h-screen py-20 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl text-tabasco font-bold pb-10">Mochamad Farras Fauzan</h1>
            <p className="max-w-md">a Software Engineer who interested in Frontend Technology. Experienced in ReactJS, React Native, NextJS, JavaScript, TypeScript, ReasonML, GraphQL, Redux, CSS.</p>
          </div>
          <div>
            <ul className="flex items-center">
              <li className='mr-4'><Link href="https://github.com/frrsfuzn"><AiFillGithub className="text-3xl" /></Link></li>
              <li className='mr-4'><Link href="https://github.com/frrsfuzn"><AiFillLinkedin className="text-3xl" /></Link></li>
              <li className='mr-4'><Link href="https://github.com/frrsfuzn"><AiFillInstagram className="text-3xl" /></Link></li>
              <li className='mr-4'><Link href="https://github.com/frrsfuzn"><AiFillTwitterSquare className="text-3xl" /></Link></li>
            </ul>
          </div>
        </header>
        <main className="w-1/2 pt-20">
          <section id="about" className="pb-10">
            <h2 className='text-3xl'>About</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue placerat orci. Duis id lacus orci. Aenean eget tempus odio. Vivamus felis quam, dapibus quis metus quis, tempus aliquet enim. Curabitur in elit urna. Nulla non fringilla dui. Suspendisse vitae tempor arcu. Donec consectetur quam id sem bibendum sollicitudin. Maecenas ex justo, efficitur ut faucibus vel, maximus sed mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a sagittis sapien. Ut vitae sodales ligula, ac elementum justo. Phasellus ut aliquet dolor, eu malesuada lacus. Sed feugiat sed sem id rhoncus. Nullam commodo felis mi, vitae dapibus velit malesuada eu.</p>
            <p>Phasellus sed elementum enim. Mauris vel aliquam nulla. Praesent nec tincidunt felis. Nulla fermentum eros augue, fermentum congue quam dignissim id. Duis consectetur metus et tellus convallis auctor. Ut quam eros, tempor id iaculis nec, tincidunt non lorem. Sed quis sem vitae lectus placerat tincidunt. Maecenas aliquam, lorem sit amet feugiat laoreet, lectus nisi congue neque, id ultrices magna ipsum a tellus. Suspendisse condimentum vulputate vulputate. Integer tortor ex, venenatis vel tristique vitae, vehicula ac enim. Vestibulum molestie eros sapien, vitae sodales massa interdum nec. Vivamus sollicitudin, odio ac pharetra tristique, dui arcu commodo dui, in tempor velit sapien in velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla mollis, erat et ultricies placerat, nunc lacus volutpat urna, sed eleifend sapien libero posuere nisl.</p>
          </section>
          <section id="about" className="pb-10">
            <h2 className='text-3xl'>Experiences</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue placerat orci. Duis id lacus orci. Aenean eget tempus odio. Vivamus felis quam, dapibus quis metus quis, tempus aliquet enim. Curabitur in elit urna. Nulla non fringilla dui. Suspendisse vitae tempor arcu. Donec consectetur quam id sem bibendum sollicitudin. Maecenas ex justo, efficitur ut faucibus vel, maximus sed mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a sagittis sapien. Ut vitae sodales ligula, ac elementum justo. Phasellus ut aliquet dolor, eu malesuada lacus. Sed feugiat sed sem id rhoncus. Nullam commodo felis mi, vitae dapibus velit malesuada eu.</p>
            <p>Phasellus sed elementum enim. Mauris vel aliquam nulla. Praesent nec tincidunt felis. Nulla fermentum eros augue, fermentum congue quam dignissim id. Duis consectetur metus et tellus convallis auctor. Ut quam eros, tempor id iaculis nec, tincidunt non lorem. Sed quis sem vitae lectus placerat tincidunt. Maecenas aliquam, lorem sit amet feugiat laoreet, lectus nisi congue neque, id ultrices magna ipsum a tellus. Suspendisse condimentum vulputate vulputate. Integer tortor ex, venenatis vel tristique vitae, vehicula ac enim. Vestibulum molestie eros sapien, vitae sodales massa interdum nec. Vivamus sollicitudin, odio ac pharetra tristique, dui arcu commodo dui, in tempor velit sapien in velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla mollis, erat et ultricies placerat, nunc lacus volutpat urna, sed eleifend sapien libero posuere nisl.</p>
          </section>
          <section id="about" className="pb-10">
            <h2 className='text-3xl'>Blogs</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue placerat orci. Duis id lacus orci. Aenean eget tempus odio. Vivamus felis quam, dapibus quis metus quis, tempus aliquet enim. Curabitur in elit urna. Nulla non fringilla dui. Suspendisse vitae tempor arcu. Donec consectetur quam id sem bibendum sollicitudin. Maecenas ex justo, efficitur ut faucibus vel, maximus sed mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a sagittis sapien. Ut vitae sodales ligula, ac elementum justo. Phasellus ut aliquet dolor, eu malesuada lacus. Sed feugiat sed sem id rhoncus. Nullam commodo felis mi, vitae dapibus velit malesuada eu.</p>
            <p>Phasellus sed elementum enim. Mauris vel aliquam nulla. Praesent nec tincidunt felis. Nulla fermentum eros augue, fermentum congue quam dignissim id. Duis consectetur metus et tellus convallis auctor. Ut quam eros, tempor id iaculis nec, tincidunt non lorem. Sed quis sem vitae lectus placerat tincidunt. Maecenas aliquam, lorem sit amet feugiat laoreet, lectus nisi congue neque, id ultrices magna ipsum a tellus. Suspendisse condimentum vulputate vulputate. Integer tortor ex, venenatis vel tristique vitae, vehicula ac enim. Vestibulum molestie eros sapien, vitae sodales massa interdum nec. Vivamus sollicitudin, odio ac pharetra tristique, dui arcu commodo dui, in tempor velit sapien in velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla mollis, erat et ultricies placerat, nunc lacus volutpat urna, sed eleifend sapien libero posuere nisl.</p>
          </section>
          <section id="about" className="pb-10">
            <h2 className='text-3xl'>Projects</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue placerat orci. Duis id lacus orci. Aenean eget tempus odio. Vivamus felis quam, dapibus quis metus quis, tempus aliquet enim. Curabitur in elit urna. Nulla non fringilla dui. Suspendisse vitae tempor arcu. Donec consectetur quam id sem bibendum sollicitudin. Maecenas ex justo, efficitur ut faucibus vel, maximus sed mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a sagittis sapien. Ut vitae sodales ligula, ac elementum justo. Phasellus ut aliquet dolor, eu malesuada lacus. Sed feugiat sed sem id rhoncus. Nullam commodo felis mi, vitae dapibus velit malesuada eu.</p>
            <p>Phasellus sed elementum enim. Mauris vel aliquam nulla. Praesent nec tincidunt felis. Nulla fermentum eros augue, fermentum congue quam dignissim id. Duis consectetur metus et tellus convallis auctor. Ut quam eros, tempor id iaculis nec, tincidunt non lorem. Sed quis sem vitae lectus placerat tincidunt. Maecenas aliquam, lorem sit amet feugiat laoreet, lectus nisi congue neque, id ultrices magna ipsum a tellus. Suspendisse condimentum vulputate vulputate. Integer tortor ex, venenatis vel tristique vitae, vehicula ac enim. Vestibulum molestie eros sapien, vitae sodales massa interdum nec. Vivamus sollicitudin, odio ac pharetra tristique, dui arcu commodo dui, in tempor velit sapien in velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla mollis, erat et ultricies placerat, nunc lacus volutpat urna, sed eleifend sapien libero posuere nisl.</p>
          </section>
        </main>
      </div>
    </div>
  )
}
