import React from 'react'
import {LoginProvider} from './login'

function ProviderComposer({ contexts, children }) {
    return contexts.reduceRight(
      (kids, parent) =>
        React.cloneElement(parent, {
          children: kids,
        }),
      children
    );
  }
  
  function ContextProvider({ children }) {
    return (
      <ProviderComposer
        contexts={[<LoginProvider />]}
      >
        {children}
      </ProviderComposer>
    );
  }
  
  export { ContextProvider };