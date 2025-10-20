import { useState } from "react";
import { FaShareAlt } from "react-icons/fa";
import {
    FaLink,
    FaWhatsapp,
    FaFacebook,
    FaInstagram,
    FaXTwitter,
} from "react-icons/fa6";

export default function ShareMenu({ url }) {
    const [open, setOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const shareLinks = [
        {
            name: "Copy Link",
            icon: <FaLink />,
            action: handleCopy,
        },
        {
            name: "WhatsApp",
            icon: <FaWhatsapp className="text-green-400" />,
            url: `https://wa.me/?text=${encodeURIComponent(url)}`,
        },
        {
            name: "Facebook",
            icon: <FaFacebook className="text-blue-500" />,
            url: `https://www.facebook.com/share_channel#?u=${encodeURIComponent(url)}`,
        },
        {
            name: "Instagram",
            icon: <FaInstagram className="text-pink-500" />,
            url: "https://www.instagram.com/",
        },
        {
            name: "X",
            icon: <FaXTwitter className="text-gray-300" />,
            url: `https://x.com/intent/tweet?url=${encodeURIComponent(url)}&text=Check%20this%20out!`,
        },
    ];

    return (
        <div className="relative">
            {/* Share Button */}
            <button
                onClick={() => setOpen(!open)}
                className="bg-black/40 hover:bg-black/60 border border-gray-700 backdrop-blur-sm transition-all p-3 rounded-full z-20"
            >
                <FaShareAlt className="text-white text-lg" />
            </button>

            {/* Dropdown Menu */}
            {open && (
                <div className="absolute right-0 mt-2 w-52 bg-gray-800/95 border border-gray-700 rounded-xl shadow-lg backdrop-blur-sm p-3 z-30">
                    {shareLinks.map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 px-3 py-2 text-gray-200 hover:bg-gray-700/60 rounded-lg cursor-pointer"
                            onClick={() => {
                                if (item.action) item.action();
                                if (item.url) window.open(item.url, "_blank");
                            }}
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
            )}

            {/* Copied message */}
            {copied && (
                <p className="absolute -bottom-0 right-0 bg-gray-700 text-sm px-3 py-1 rounded-md text-gray-200 shadow-md">
                    Link copied!
                </p>
            )}
        </div>
    );
}
