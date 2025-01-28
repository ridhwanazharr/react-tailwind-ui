import { useState } from "react";
import CodeBlock from "./CodeBlock";

const CardDemo = () => {
    const [showCode, setShowCode] = useState(false);

    const cardComponent = (
        <div className="card">
            <div className="card-close">
                <i className="bi bi-x-circle"></i>
            </div>
            <div className="card-header">
                <img src="/person.jpg" alt="Profile" className="card-profile" />
                <div className="card-profile-text">
                    <h2 className="text-xl">John Doe</h2>
                    <a href="#" className="text-md opacity-75">@realjohndoe</a>
                </div>
            </div>
            <div className="card-content">
                Hi. I'm new on this platform, nice to meet you guys!
            </div>
            <div className="card-footer">
                <a href="#" className="btn-primary">
                    <i className="bi bi-hand-thumbs-up"></i> Like
                </a>
                <a href="#" className="btn-warning">
                    <i className="bi bi-send"></i> Share
                </a>
            </div>
        </div>
    );

    const cardHtml = `
        <div class="card resize overflow-auto">
            <div class="card-close">
                <i class="bi bi-x-circle"></i>
            </div>
            <div class="card-header">
                <img src="/person.jpg" alt="Profile" class="card-profile">
                <div class="card-profile-text">
                    <h2 class="text-xl">John Doe</h2>
                    <a href="#" class="text-md opacity-75">@realjohndoe</a>
                </div>
            </div>
            <div class="card-content">
                Hi. I'm new on this platform, nice to meet you guys!
            </div>
            <div class="card-footer">
                <a href="#" class="btn-primary"><i class="bi bi-hand-thumbs-up"></i> Like</a>
                <a href="#" class="btn-warning"><i class="bi bi-send"></i> Share</a>
            </div>
        </div>
    `;

    return (
        <div className="h-full flex flex-col">
            <div className="flex ms-2 justify-end me-5">
                <a 
                    onClick={() => setShowCode(!showCode)} 
                    className="cursor-pointer bg-gradient-to-r  bg-blue-400 dark:bg-blue-700 border-t-1 border-x-1 border-black/50 dark:border-white/50  backdrop-blur-xl rounded-t-xl px-4 py-1 text-black dark:text-white"
                >
                    {showCode ? (
                        <>
                            <i className="bi bi-eye-fill"></i> Preview
                        </>
                    ) : (
                        <>
                            <i className="bi bi-code-slash"></i> Code
                        </>
                    )}
                </a>
            </div>

            <div className="flex-grow">
                    {showCode ? (
                        <div className="">
                            <CodeBlock language="html" code={cardHtml} />
                        </div>
                        
                    ) : (
                        cardComponent
                    )}
            </div>
        </div>
    );
};

export default CardDemo;
