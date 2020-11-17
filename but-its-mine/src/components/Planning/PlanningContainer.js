import React from 'react';
import { Link } from 'react-router-dom';

function PlanningContainer() {
    return (
        <div className = 'main'>
            <h2>Planning</h2>
            <p>As mentioned other places in this site, planning a new PC can be stressful for anyone. You want to make sure all the components are compatible, while making sure the performance meets your expectations, and of course it needs to look good! On this page we will try to break down the planning phase so it is not so intimidating.</p>
            <h3>Budgeting</h3>
            <p>This biggest factor that leads to better performance is budget. There is no way around this. While there are overclocking options that can get slight performance improvements over stock, there simply is no way to get high performance with a low budget. As is true with anything else, you get what you pay for. Many of us save for months for a new build because we know it will last years. So plan your budget carefully and do your best to stick to it. Going over budget on a couple components can easily add hundreds of dollars to the overall cost.</p>
            <p>Remember that the PC is only one part of the setup. There are peripherals that you will need such as a monitor, mouse, and keyboard. Depending on the performance you expect, a monitor can be a very large purchase. So if you are already strecthing your wallet just to build your PC you may want to reconsider your budget.</p>
            <p>It can be easy to spec out a PC with all the parts you think you want only to find out the total is $500 over budget. In the link below we have provided a basic budgetting tool to help you understand the price you should be targetting for each component based on your budget. This is only a guide, if you find a good deal on a CPU bundle this means you can move that extra money into other components.</p>
            <Link to = '/planning/budget-tool'><button>Go to the budget tool</button></Link>
            <h3>Picking parts</h3>
            <p>There are seven main components to any PC:</p>
            <ul>
                <li>CPU - (Central Processing Unit)</li>
                <li>Motherboard - (Sometimes called main board)</li>
                <li>Graphics Card - (GPU)</li>
                <li>Power Supply - (PSU)</li>
                <li>Memory - (RAM)</li>
                <li>Storage</li>
                <li>Case</li>
            </ul>
            <p>A lot of CPUs come with stock coolers. These usually are not very efficient and can be quite loud, but if you are tight on budget they work just fine. If you want to upgrade, or purchase a CPU without a stock cooler you will need to budget for this cost as well.</p>
            <p>There are a lot of different ways to configure memory and storage, and the larger your budget the more possibilities. On the low end, you should plan to purchase a two stick set of memory and a single SSD for storage. On the high end you can fill every memory slot on your motherboard wiht the highest capacity and fastest memory on the market. You can also load up the drive bay with high capacity SSDs.</p>
            <p>The most common RAM configuration is two sticks of 3000+ MHz 8GB RAM. This seems to fit well with even the lower budgets. For memory we suggest at a minimum a 250GB SSD for your boot drive and 1TB hard drive for storage.</p>
            <h3>Example Builds</h3>
            <p>Section coming soon!</p>            
            <h3>Plan for periherals</h3>
            <p>Something a lot of new PC builders forget about, including myslef, is peripherals. These are all the components you need to have a full setup besides your PC. While the peripiherals you will need will vary on personal preferences, there are four components you will absolutely need:</p>
            <ul>
                <li>Monitor</li>
                <li>Mouse</li>
                <li>Keyboard</li>
                <li>Audio output</li>
            </ul>
            <p>Price for these three main peripherals can be as low as a couple hundred or you can spend over $1000 on the monitor alone. Make sure you buy for what you currently need, plus a little bit more so you can push off upgrading a little further. Audio output depends on your personal preference. If you plan on playing games with friends online you most likely need a mic or headset. If you plan on only playing one player games you can get by with a set of small speakers.</p>
            <p>Peripherals past these three are completely your choice. There are dozens of types of peripherals and hundreds of choices. Some of the other peripherals include:</p>
            <ul>
                <li>Additional monitors</li>
                <li>Controllers</li>
                <li>Racing Wheel</li>
                <li>Virtual Reality Headset</li>
            </ul>
            <p>Besides these components make sure you have a nice desk and chair. In addition to peripherals you of course need to plan for your first games! A PC with no games will do you no good. Once you have done all your research, order your parts, and get ready to build!</p>
        </div>
    )
}

export default PlanningContainer;