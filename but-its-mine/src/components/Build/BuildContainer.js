import React from 'react';
import BuildItem from './BuildItem';


function BuildContainer() {
    return (
        <div className = 'main'>
            <h2>Building</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a lacinia purus. Mauris congue elit sit amet justo sollicitudin porttitor. Vivamus quis vulputate nulla. Curabitur et dui at eros condimentum congue quis id sapien. Fusce mi odio, aliquam eu orci non, mattis mollis leo. Vivamus egestas magna eget luctus ultricies. Vivamus sodales finibus neque, nec tristique ligula euismod in. Fusce gravida leo vel magna varius, at imperdiet dolor eleifend. Pellentesque tincidunt leo vel libero tempor fringilla. Nunc interdum faucibus dui sit amet mattis. Donec lacinia finibus egestas. Pellentesque scelerisque odio quis orci malesuada mattis. Maecenas laoreet pharetra lectus, a finibus mi cursus vel.</p>
            <h3>JayzTwoCents</h3>
            <p>Nam in tortor eu libero pellentesque euismod. Morbi dapibus pretium neque eu fringilla. Vivamus et mauris sit amet ante dictum molestie vitae vel quam. Duis sed faucibus arcu. Aenean bibendum consectetur libero, non placerat libero auctor id. Quisque interdum fermentum massa in fringilla. Nunc blandit condimentum diam, at porttitor massa viverra eu. Fusce non metus elit.</p>
            <BuildItem src = 'https://www.youtube.com/embed/hK51upU5bkU'/>
            <h3>BitWit</h3>
            <p>Nam in tortor eu libero pellentesque euismod. Morbi dapibus pretium neque eu fringilla. Vivamus et mauris sit amet ante dictum molestie vitae vel quam. Duis sed faucibus arcu. Aenean bibendum consectetur libero, non placerat libero auctor id. Quisque interdum fermentum massa in fringilla. Nunc blandit condimentum diam, at porttitor massa viverra eu. Fusce non metus elit.</p>
            <BuildItem src = "https://www.youtube.com/embed/IhX0fOUYd8Q"/>
            <h3>Paul's Hardware</h3>
            <p>Nam in tortor eu libero pellentesque euismod. Morbi dapibus pretium neque eu fringilla. Vivamus et mauris sit amet ante dictum molestie vitae vel quam. Duis sed faucibus arcu. Aenean bibendum consectetur libero, non placerat libero auctor id. Quisque interdum fermentum massa in fringilla. Nunc blandit condimentum diam, at porttitor massa viverra eu. Fusce non metus elit.</p>
            <BuildItem src = "https://www.youtube.com/embed/gejkP3PhrCo"/>
            <h3>Gamers Nexus</h3>
            <p>Nam in tortor eu libero pellentesque euismod. Morbi dapibus pretium neque eu fringilla. Vivamus et mauris sit amet ante dictum molestie vitae vel quam. Duis sed faucibus arcu. Aenean bibendum consectetur libero, non placerat libero auctor id. Quisque interdum fermentum massa in fringilla. Nunc blandit condimentum diam, at porttitor massa viverra eu. Fusce non metus elit.</p>
            <BuildItem src = "https://www.youtube.com/embed/YySa723VD2Y"/>
        </div>
    )
}

export default BuildContainer;


