import Image from 'next/image';
import Link from 'next/link';
import TelegramSVG from './svg/TelegramSVG';
import XSVG from './svg/XSVG';
import { Button } from './button';

function SocialLink({is_footer}: {is_footer?: boolean}) {
    return (
        <div className="flex flex-row gap-x-4 justify-center sm:justify-start items-center">
            {
                (!is_footer) && (
                    <Button 
                    onClick={() => window.open('https://jup.ag/swap/SOL-w1QbBj9AS89pds1X2zbEWVpjR5mbs4RBYWxNJaZpump', '_blank')}
                    className="bg-neutral-300 text-black hover:bg-yellow-600"
                    >
                        Buy Now!
                    </Button>
                )
            }
            <Link
                href="https://x.com/dreamlksol" 
                target="_blank" 
                className="bg-neutral-300 p-2 flex rounded-full h-10 w-10 items-center justify-center"
            >
                <XSVG height="28px" width="28px"/> 
            </Link>
            <Link 
                href="https://t.me/mlkday" 
                target="_blank" 
                className="bg-neutral-300 flex rounded-full h-10 w-10"
            >	
                <TelegramSVG height="40px" width="40px"/> 
            </Link>
            <Link 
                href="https://dexscreener.com" 
                target="_blank" 
                className="bg-neutral-950 p-2 flex rounded-full h-10 w-10 border border-neutral-300">	
                <Image src={"https://dexscreener.com/favicon.png"} alt="Dex Tools Logo"  width={40} height={40}/> 
            </Link>						
        </div>
    )
}

export default SocialLink;
