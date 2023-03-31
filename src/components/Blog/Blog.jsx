import React from "react";

const Blog = () => {
  return (
    <div className="container text-center">
      <div className=" ">
        <h2> 1.What is the Difference Between Props and Sate ?</h2>
        <p>
          Props are a way to pass data from a parent component to a child
          component. They are read-only and are used to customize the behavior
          or appearance of a child component. When a parent component passes
          props to a child component, the child component cannot modify the
          props directly - they are immutable. Instead, the child component can
          use props to render itself differently based on the values passed down
          from the parent component.
          <br />
          State, on the other hand, is used to manage data within a component.
          Unlike props, state is mutable and can be updated by the component
          itself. State represents the internal state of a component and can be
          used to influence how the component is rendered. When the state of a
          component changes, React automatically re-renders the component,
          updating its appearance to reflect the new state.
          <br />
          Main Summary will be , props are used to pass data down from a parent
          component to a child component, while state is used to manage data
          within a component itself.
        </p>
      </div>
      <div>
        <h2>2.How does useState work?</h2>
        <p>
          The useState() is a Hook that allows you to have state variables in
          functional components . so basically useState is the ability to
          encapsulate local state in a functional component. React has two types
          of components, one is class components which are ES6 classes that
          extend from React and the other is functional components. Class
          components a Component and can have state and lifecycle methods: class
          Message extends React. The useState hook is a special function that
          takes the initial state as an argument and returns an array of two
          entries. UseState encapsulate only singular value from the state, for
          multiple state need to have useState calls.
        </p>
      </div>
      <div>
        <h2> 3.What is the Purpose of useEffect other than fetching data?</h2>
        <p>
          the useEffect hook can be used for a wide variety of tasks beyond
          fetching data, including updating the document title, managing event
          listeners, managing subscriptions, managing timers, and managing
          animations. Its flexibility and versatility make it a powerful tool
          for managing the lifecycle of a React component.
        </p>
      </div>
      <div>
        <h2>4.How Does React work?</h2>
        <p>
          React is a JavaScript library for building user interfaces. At a high
          level, React works by creating a virtual representation of the user
          interface, called the Virtual DOM, and using that representation to
          efficiently update the actual DOM in response to changes in the
          underlying data.
          <br />
          <ul>
            <li>
              Components: React applications are built using components. Each
              component is a self-contained unit of code that represents a part
              of the user interface. Components can be nested inside other
              components to create complex user interfaces.{" "}
            </li>
            <li>
              Virtual DOM: When a component is rendered, React creates a virtual
              representation of the DOM, called the Virtual DOM. The Virtual DOM
              is a lightweight copy of the actual DOM, and it's used to track
              changes to the user interface without actually modifying the
              browser's DOM. <br />
            </li>

            <li>
              Render: When a component is initially rendered, React generates a
              tree of React elements, which describe what should be rendered on
              the screen. React then uses the Virtual DOM to efficiently update
              the actual DOM to match the new tree of React elements. <br />{" "}
            </li>
            <li>
              State: Components can have internal state, which determines how
              they should render based on changes to their own data. When a
              component's state changes, React re-renders the component and
              updates the Virtual DOM to reflect the new state. <br />
            </li>

            <li>
              Props: Components can also receive props from their parent
              component, which determine how they should render based on data
              from the parent component. When a component's props change, React
              re-renders the component and updates the Virtual DOM to reflect
              the new props. <br />{" "}
            </li>
            <li>
              Reconciliation: When changes occur in the user interface, React
              updates the Virtual DOM to reflect the new state or props, and
              then performs a process called reconciliation. Reconciliation
              involves comparing the previous version of the Virtual DOM with
              the new version, and then applying the minimum number of changes
              necessary to update the actual DOM.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Blog;
