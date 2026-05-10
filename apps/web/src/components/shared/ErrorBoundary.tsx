"use client";

import React from "react";

type Props = {

  children: React.ReactNode

}

type State = {

  hasError: boolean

}

export default class ErrorBoundary extends React.Component<Props, State> {

  constructor(props: Props) {

    super(props);

    this.state = {

      hasError: false

    };

  }

  static getDerivedStateFromError() {

    return {

      hasError: true

    };

  }

  retry = () => {

    this.setState({

      hasError: false

    });

  }

  render() {

    if (this.state.hasError) {

      return (

        <div
          className="
            bg-white/5

            border border-white/10

            rounded-xl

            p-4

            sm:p-6

            text-sm

            w-full

            overflow-hidden
          "
        >

          <p
            className="
              mb-3

              text-sm

              sm:text-base

              text-white/70

              wrap-break-words
            "
          >

            Something went wrong

          </p>

          <button
            onClick={this.retry}

            className="
              text-sm

              sm:text-base

              text-white

              underline

              hover:opacity-80

              transition
            "
          >

            Try again

          </button>

        </div>

      );

    }

    return this.props.children;

  }

}