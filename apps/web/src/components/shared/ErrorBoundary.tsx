"use client"

import React from "react"

type Props = {
  children: React.ReactNode
}

type State = {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<Props, State> {

  constructor(props: Props) {

    super(props)

    this.state = {
      hasError: false
    }

  }

  static getDerivedStateFromError() {

    return {
      hasError: true
    }

  }

  retry = () => {

    this.setState({
      hasError: false
    })

  }

  render() {

    if (this.state.hasError) {

      return (

        <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-sm">

          <p className="mb-3 text-white/70">
            Something went wrong
          </p>

          <button
            onClick={this.retry}
            className="text-white underline"
          >
            Try again
          </button>

        </div>

      )

    }

    return this.props.children

  }

}