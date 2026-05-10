export default function SignInPage() {

  return (

    <div
      className="
        relative

        flex
        items-center
        justify-center

        w-full
      "
    >

      {/* floating gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">

        <div
          className="
            absolute

            left-[10%]
            top-[20%]

            h-45
            w-45

            sm:h-65
            sm:w-65

            animate-float

            rounded-full

            bg-linear-to-r
            from-indigo-200
            to-purple-200

            opacity-40

            blur-3xl
          "
        />

        <div
          className="
            absolute

            right-[10%]
            bottom-[15%]

            h-40
            w-40

            sm:h-55
            sm:w-55

            animate-float-delayed

            rounded-full

            bg-linear-to-r
            from-pink-200
            to-rose-200

            opacity-40

            blur-3xl
          "
        />

      </div>

      {/* music wave background */}
      <div
        className="
          pointer-events-none

          absolute
          bottom-0
          left-0
          right-0

          -z-10

          opacity-[0.06]
        "
      >

        <svg
          viewBox="0 0 1440 320"
          className="w-full"
        >

          <path
            fill="black"

            d="M0,160L40,149.3C80,139,160,117,240,112C320,107,400,117,480,133.3C560,149,640,171,720,165.3C800,160,880,128,960,117.3C1040,107,1120,117,1200,122.7C1280,128,1360,128,1400,128L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />

        </svg>

      </div>

      {/* card */}
      <div
        className="
          relative

          w-full

          max-w-md

          rounded-2xl

          sm:rounded-3xl

          border border-neutral-200

          bg-white

          p-6

          sm:p-8

          lg:p-10

          shadow-[0_25px_70px_rgba(0,0,0,0.08)]

          transition-transform
          duration-500

          hover:-translate-y-1
        "
      >

        {/* gradient accent line */}
        <div
          className="
            absolute
            left-0
            right-0
            top-0

            h-0.75

            rounded-t-3xl

            bg-linear-to-r
            from-indigo-400
            via-purple-400
            to-pink-400
          "
        />

        {/* heading */}
        <div
          className="
            mb-8

            sm:mb-10

            text-center
          "
        >

          <h1
            className="
              text-2xl

              sm:text-3xl

              font-semibold

              tracking-tight

              text-neutral-900
            "
          >

            MusiConnect

          </h1>

          <p
            className="
              mt-2

              text-sm

              text-neutral-500
            "
          >

            Experience music together

          </p>

        </div>

        {/* OAuth button */}
        <a
          href={`${process.env.NEXT_PUBLIC_API_URL}/auth/google`}

          className="
            group
            relative

            flex
            w-full

            items-center
            justify-center

            gap-3

            rounded-xl

            border border-neutral-300

            bg-white

            px-4
            py-3

            text-sm
            font-medium

            text-neutral-800

            transition-all
            duration-200

            hover:border-neutral-400
            hover:shadow-md
            hover:-translate-y-px

            active:translate-y-0
            active:scale-[0.98]

            focus:outline-none
            focus:ring-2
            focus:ring-purple-300
          "
        >

          {/* hover glow */}
          <span
            className="
              absolute inset-0

              rounded-xl

              opacity-0

              transition-opacity
              duration-300

              group-hover:opacity-100

              bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05),transparent_70%)]
            "
          />

          {/* google icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"

            viewBox="0 0 48 48"

            className="
              relative

              h-5
              w-5

              shrink-0
            "
          >

            <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.5 32.9 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"/>

            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 16.1 18.9 13 24 13c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.6 6.1 29.6 4 24 4 16 4 9 8.3 6.3 14.7z"/>

            <path fill="#4CAF50" d="M24 44c5.1 0 9.8-1.9 13.3-5.1l-6.1-5c-2 1.5-4.6 2.4-7.2 2.4-5.2 0-9.5-3.1-11.1-7.4l-6.5 5C9 39.6 16 44 24 44z"/>

            <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.2 3.1-3.6 5.5-6.6 6.9l6.1 5C39.9 36.6 44 30.9 44 24c0-1.3-.1-2.7-.4-3.5z"/>

          </svg>

          <span className="relative text-center">

            Continue with Google

          </span>

        </a>

        <p
          className="
            mt-6

            sm:mt-8

            text-center

            text-xs

            text-neutral-400
          "
        >

          Secure authentication via Google

        </p>

      </div>

    </div>

  );

}