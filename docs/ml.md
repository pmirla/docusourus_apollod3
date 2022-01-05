---
sidebar_label: 'Machine Learning'
sidebar_posiiton: 3
---


# ML Top Stories

This is my first ** docusourus document**!


```jsx title="src/components/HelloDocusaurus.js"
function HelloDocusaurus() {
    return (
        <h1>Hello, Docusaurus!</h1>
    )
}
```

:::tip My tip

Use this awesome feature option

:::

:::danger Take care

This action is dangerous

:::


![Docusaurus logo](/img/docusaurus.png)

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> !

This is <Highlight color="#1877F2">Facebook blue</Highlight> !


export const MyComponent = ({children}) => (
    <main>
      <h1 className="purple-text">{children}</h1>
    </main>
)

<MyComponent> My purple text</MyComponent>


### Details element example

<details>
  <summary>Toggle me!</summary>
  <div>
    <div>This is the detailed content</div>
    <br/>
    <details>
      <summary>
        Nested toggle! Some surprise inside...
      </summary>
      <div>
        😲😲😲😲😲
      </div>
    </details>
  </div>
</details>
