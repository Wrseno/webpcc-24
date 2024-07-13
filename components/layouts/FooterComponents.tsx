import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {BsFacebook, BsGithub, BsInstagram, BsTwitter} from "react-icons/bs";

import {Flowbite} from "flowbite-react";
import type {CustomFlowbiteTheme} from "flowbite-react";

const customTheme: CustomFlowbiteTheme = {
  footer: {
    root: {
      base: "w-full bg-primary shadow md:flex md:items-center md:justify-between",
      container: "w-full p-6 mt-32 md:px-32",
    },
    groupLink: {
      base: "flex flex-wrap text-sm text-senary",
      link: {
        base: "me-4 last:mr-0 md:mr-6",
        href: "hover:underline",
      },
      col: "flex-col space-y-4",
    },
    icon: {
      base: "text-senary",
      size: "h-5 w-5",
    },
    title: {
      base: "mb-6 text-sm font-semibold uppercase text-senary",
    },
    divider: {
      base: "my-6 w-full border-septenary sm:mx-auto lg:my-8",
    },
    copyright: {
      base: "text-sm text-septenary sm:text-center",
      href: "ml-1 hover:underline",
      span: "ml-1",
    },
    brand: {
      base: "mb-4 flex items-center sm:mb-0",
      img: "mr-3 h-8",
      span: "self-center whitespace-nowrap text-2xl font-semibold text-senary",
    },
  },
};

export default function FooterComponents() {
  return (
    <Flowbite theme={{theme: customTheme}}>
      <Footer container>
        <div className='w-full container mx-auto'>
          <div className='grid gap-4 w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1'>
            <div>
              <FooterBrand
                src='/images/pcc.png'
                alt='PCC Logo'
                name='PCC'
                className='w-[50px] h-[50px]'
              />
              <h3 className='font-bold text-lg text-senary my-4'>
                POLYTECHNIC COMPUTER CLUB
              </h3>
              <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
                <FooterIcon href='#' icon={BsFacebook} />
                <FooterIcon href='#' icon={BsInstagram} />
                <FooterIcon href='#' icon={BsTwitter} />
                <FooterIcon href='#' icon={BsGithub} />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
              <div>
                <FooterTitle title='service' className='text-senary' />
                <FooterLinkGroup col>
                  <FooterLink href='#'>Graphic Design</FooterLink>
                  <FooterLink href='#'>Web Project</FooterLink>
                  <FooterLink href='#'>Maintenance</FooterLink>
                  <FooterLink href='#'>Store</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title='about' className='text-senary' />
                <FooterLinkGroup col>
                  <FooterLink href='#'>Blog</FooterLink>
                  <FooterLink href='#'>Website</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title='contact' className='text-senary' />
                <FooterLinkGroup col>
                  <FooterLink href='#'>
                    Semarang, Indonesia Politeknik Negeri Semarang
                  </FooterLink>
                  <FooterLink href='#'>www.ukm.pcc.org</FooterLink>
                </FooterLinkGroup>
              </div>
            </div>
          </div>
          <FooterDivider />
          <div className='w-full sm:flex sm:items-center sm:justify-between'>
            <FooterCopyright href='#' by='PCC Polines' year={2024} />
          </div>
        </div>
      </Footer>
    </Flowbite>
  );
}
