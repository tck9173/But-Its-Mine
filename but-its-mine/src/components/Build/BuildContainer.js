import React from 'react';
import BuildItem from './BuildItem';


function BuildContainer() {
    return (
        <div className = 'main'>
            <h2>Building</h2>
            <p>So the time has finally come. You did your research, you picked your parts, you stuck to your budget.... mostly.... maybe. Now you actually have to put this thing together.</p>
            <p>As mentioned elsewhere on this site, building a PC is not difficult. Make sure you take your time, relax, and double check all connections before you power the system on. If you have a friend that has built a PC before ask for their supervision. Again, not because building a PC is hard, but because there are several connections that can be confusing especially to first time builders.</p>
            <p>Before you even think about putting anything together make sure you read all the manuals, especially for your motherboard. Motherboard layouts are all similar but different manufacturers can have different locations for the same port. If anything in the manual is confusing the manufacturers website can usually answer any specific questions. Feel free to use the forum on this site as well if you can't find the answer to your question.</p>
            <p>While reading the manuals is very important, sometimes you just need someone to show you what goes where or how to put something together. Below are some great build videos from channels we highly recommend. Again, we suggest you watch these videos (and then some) before you actually build your system. Then when you are ready to build your system you can put the video on in the background and follow along as you build your own PC.</p>
            <p>This can be a stressful time. Just know there is very little you can do to damage the components as long as you do not drop them and double, triple, quadruple check connections before powering on the system. So take your time and enjoy it!</p>
            <h3>JayzTwoCents</h3>
            <p>While some of his videos can be a little silly, there is simply no one who knows more about watercooling high end PCs. JayzTwoCents does a great job at describing highly technical subjects in a manner anyone can understand. Surely any of his videos are bound to be educational as well as entertaining.</p>
            <BuildItem src = 'https://www.youtube.com/embed/hK51upU5bkU'/>
            <h3>BitWit</h3>
            <p>While younger than Jay, Kyle at BitWit has proven his experience when it comes to building PCs. He has been building his channel for years and recently moved into a dedicated studio space. Many of his videos are vlog format and a great watch. Be sure to check in on his progress every once in a while.</p>
            <BuildItem src = "https://www.youtube.com/embed/IhX0fOUYd8Q"/>
            <h3>Paul's Hardware</h3>
            <p>Paul has great example builds for nearly any budget. Paul does a great job with connecting with his fan base and basing his videos off the community. He recently surprised the other tech channels when he took part in the famous "RIP GN series". This series had previously been a friendly challenge between JayzTwoCents and Gamers Nexus but Paul gave them a run for their money! Go check him out!</p>
            <BuildItem src = "https://www.youtube.com/embed/gejkP3PhrCo"/>
            <h3>Gamers Nexus</h3>
            <p>Without a doubt the most technical oriented channely of the bunch, Gamers Nexus does teardown videos and thorough benchmarking of nearly every component they review. While their videos are usually more serious than the others, there is no one else that will explain the technical details of a product you didn't even know you wanted to know. Other channels can offer another opinion when it comes to benchmarks but there usually is no alternative for teardowns when it comes to the newest PC components.</p>
            <BuildItem src = "https://www.youtube.com/embed/YySa723VD2Y"/>
        </div>
    )
}

export default BuildContainer;


