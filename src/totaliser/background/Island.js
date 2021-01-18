import React from "react";

function Island({ className, flip }) {
  const transform = flip ? `translate(140, 0) scale(-1, 1)` : "";

  return (
    <svg className={className} viewBox="0 0 139 90">
      <g transform={transform} overflow="visible">
        <path
          fill="#748c00"
          d="M26.51 79.813s-1.716-.79-2.61-2.106c-.896-1.316-1.117-4.029-.358-4.123.758-.095 1.848-.617 2.89 1.57 1.04 2.185.077 4.66.077 4.66z"
        />
        <path
          fill="#748c00"
          d="M26.836 64.212s.21 1.88-.454 3.328c-.663 1.447-2.868 3.036-3.34 2.434-.472-.602-1.48-1.27-.15-3.291 1.332-2.022 3.943-2.47 3.943-2.47z"
        />
        <path
          fill="#748c00"
          d="M11.754 79.865s-.276-1.871.335-3.341c.612-1.47 2.758-3.138 3.251-2.553.493.585 1.525 1.216.267 3.284-1.258 2.068-3.853 2.61-3.853 2.61z"
        />
        <path
          fill="#748c00"
          d="M22.983 61.994s-.206 1.881-1.169 3.148c-.963 1.267-3.46 2.335-3.79 1.644-.329-.691-1.167-1.563.572-3.244 1.74-1.682 4.387-1.548 4.387-1.548z"
        />
        <path
          fill="#748c00"
          d="M16.7 60.153s.957 1.63.942 3.223c-.016 1.593-1.38 3.946-2.057 3.59-.676-.357-1.868-.553-1.477-2.943.39-2.39 2.592-3.87 2.592-3.87z"
        />
        <path
          fill="#748c00"
          d="M17.512 80.286s-1.42-1.247-1.904-2.764c-.484-1.517.075-4.18.829-4.055.754.126 1.947-.063 2.324 2.33.377 2.392-1.25 4.489-1.25 4.489z"
        />
        <path
          fill="#748c00"
          d="M29.45 68.38s-1.093 1.543-2.55 2.18c-1.456.638-4.156.353-4.108-.411.048-.765-.262-1.936 2.074-2.556 2.336-.62 4.583.787 4.583.787z"
        />
        <path
          fill="#748c00"
          d="M11.068 64.88s1.884-.11 3.291.63 2.874 3.03 2.249 3.47c-.625.442-1.343 1.416-3.287-.023-1.944-1.439-2.253-4.077-2.253-4.077z"
        />
        <path
          fill="#748c00"
          d="M19.6 64.97s.957 1.63.942 3.223c-.016 1.593-1.38 3.946-2.057 3.59-.676-.357-1.868-.553-1.477-2.944.39-2.39 2.592-3.869 2.592-3.869z"
        />
        <path
          fill="#748c00"
          d="M12.197 72.139s1.365-1.307 2.915-1.655c1.551-.348 4.148.447 3.956 1.188-.192.741-.11 1.95-2.521 2.113-2.411.164-4.35-1.646-4.35-1.646z"
        />
        <path
          fill="#748c00"
          d="M25.015 73.416s-1.76.682-3.326.407c-1.566-.276-3.66-2.009-3.198-2.62.461-.61.849-1.757 3.138-.98 2.289.776 3.386 3.193 3.386 3.193z"
        />
        <path
          fill="#888653"
          d="M11.075 85.065S25.236 32.65 36.954 31.71c11.717-.94 15.467-6.577 15.467-6.577s32.196-9.472 36.883-5.244c4.687 4.229 37.172 5.714 40.453 26.385 3.281 20.672 4.219 36.698 4.219 36.698s-41.246-1.396-51.558.483c-10.311 1.88-23.937 5.154-41.606 2.174-6.667-1.124-29.737-.564-29.737-.564z"
        />
        <path
          fill="#7c7a4a"
          d="M78.606 19.241c-11.03 1.433-26.185 5.892-26.185 5.892s-3.75 5.638-15.467 6.577c-1.798.144-3.42 1.188-4.877 2.847 1.36-.064 2.287-.006.96.44-.749.25-1.653.903-2.568 1.733-1.279 2.01-2.411 4.485-3.405 7.19 1.704.588 4.013 1.28 1.183 1.974-.66.161-1.393.466-2.15.86-1.666 5.226-1.716 5.974-2.535 10.603 1.817-.615 2.598-1.251 4.124-1.127 1.468.12-2.032 3.926-.197 4.103 1.925.184 4.93-1.786 7.257-1.598 1.632.132 1.284 3.926 3.078 4.07 1.868.151 2.621-4.526 4.655-4.397 2.378.15 3.662 5.468 6.238 5.65 1.986.139 1.635-4.225 3.757-4.121 2.409.118 2.992 4.73 5.518 4.863 2.023.107 2.539-4.627 4.634-4.564 4.764.141-1.332 10.035 4.319 10.561 1.563.145 7.116-7.395 9.983-8.278 2.523-.777.197 5.955 2.575 5.988 2.034.028 5.799-7.65 7.34-5.374.99 1.46 4.223 4.622 5.407 4.637 2.47.03 2.948-4.73 4.125-4.741 3.232-.033-1.674 5.808 3.127 5.081 2.283-.345 8.017-4.284 10.68-4.856 1.383-.297 2.797.305 4.162.466 2.832.334 4.724 5.054 7.361 5.147 1.114.04 2.894-6.731 3.957-6.692 1.847.068 3.788.9 6.39 1.983-.587-5.416-.624-6.973-1.853-15.028-1.427-.063-2.637-.22-2.964-.742-.967-1.545.356-4.576 1.05-7.052a19.806 19.806 0 00-2.714-4.37c-4.911-.418-11.95 4.075-11.95 4.075 2.512-2.862 1.148-7.27.55-8.224-.6-.954-6.437 4.086-6.437 4.086s-1.796-6.947-2.545-6.947c-.748 0-4.64 5.313-4.64 5.313s1.048-5.177 1.197-6.947c.15-1.771-7.634.953-7.634.953s4.042-2.724 4.042-3.678c0-.953-14.82-2.588-14.82-2.588l3.892-3.133s-4.383-.413-8.62-.635z"
        />
        <path
          fill="#344610"
          d="M16.87 50.603c-2.095-.545 4.042-10.761 5.39-11.306 1.347-.545-2.246.545-3.294 0s5.39-6.402 9.281-7.356c3.892-.953-1.946-1.907-2.545-2.588-.598-.681 4.491-7.356 7.335-8.31 2.844-.953-4.64-.136-4.64-.136s-4.042-.68 2.395-3.541c6.437-2.86 8.981-6.675 12.873-5.722 3.892.954-3.143-2.724-5.09-2.996-1.945-.273 6.587-5.04 11.976-.954 5.39 4.087 1.048.681 1.048.681S48.326-.512 50.252.023c.951.264 4.508 8.715 4.79 7.944 0 0 8.083-7.629 11.377-7.765 3.293-.136-.749 1.362-1.048 3.27-.3 1.906-1.497 4.086-1.497 4.086s4.341-1.907 8.083-2.316c3.743-.408 15.269.681 15.269.681l-3.892 3.133s14.82 1.635 14.82 2.588c0 .954-4.042 3.678-4.042 3.678s7.784-2.724 7.634-.953c-.15 1.77-1.197 6.947-1.197 6.947s3.892-5.313 4.64-5.313c.749 0 2.545 6.948 2.545 6.948s5.838-5.04 6.437-4.087c.598.954 1.962 5.363-.55 8.224 0 0 9.963-6.361 14.453-3.243 2.165 1.504-2.427 8.055-.839 10.59.863 1.379 7.858.216 8.828 1.476 1.849 2.402-3.71 4.824-3.752 7.111-.056 3.195 4.593 5.968 1.702 6.652-1.02.241-1.96 1.627-.107 3.488 1.847 1.855 6.49 4.185 4.96 4.341-2.51.257-9.613-4.032-13.204-4.164-1.064-.04-2.843 6.731-3.957 6.692-2.637-.094-4.529-4.813-7.36-5.148-1.366-.161-2.78-.763-4.162-.466-2.664.573-8.398 4.511-10.681 4.857-4.8.726.105-5.115-3.127-5.082-1.176.012-1.656 4.771-4.125 4.741-1.184-.014-4.417-3.176-5.407-4.636-1.542-2.276-5.306 5.402-7.34 5.373-2.378-.033-.052-6.765-2.575-5.988-2.867.883-8.42 8.424-9.983 8.278-5.65-.525.445-10.42-4.32-10.56-2.094-.063-2.61 4.67-4.633 4.564-2.526-.133-3.11-4.746-5.518-4.864-2.122-.103-1.771 4.26-3.757 4.12-2.576-.18-3.86-5.499-6.238-5.649-2.034-.128-2.787 4.549-4.655 4.398-1.794-.145-1.446-3.939-3.078-4.07-2.328-.189-5.333 1.782-7.257 1.597-1.836-.176 1.666-3.982.197-4.102-3.919-.32-10.585 3.269-10.815 3.209z"
        />
        <path
          fill="#536502"
          d="M20.492 47.923c-1.977-.498 3.812-9.838 5.083-10.336 1.27-.498-2.118.498-3.106 0-.989-.498 5.083-5.853 8.754-6.725 3.671-.872-1.835-1.743-2.4-2.366s4.236-6.725 6.919-7.597c2.683-.871-4.378-.124-4.378-.124s-3.812-.623 2.26-3.238c6.071-2.615 8.472-6.102 12.143-5.23 3.671.871-2.965-2.491-4.8-2.74-1.836-.25 6.212-4.608 11.296-.872 5.083 3.736.988.623.988.623s-3.088-8.125-1.27-7.636c.896.242 4.251 7.967 4.518 7.262 0 0 7.625-6.974 10.731-7.098 3.107-.125-.706 1.245-.988 2.989-.283 1.743-1.412 3.736-1.412 3.736s4.095-1.744 7.625-2.117c3.53-.374 14.402.622 14.402.622l-3.67 2.865s13.978 1.494 13.978 2.366c0 .871-3.812 3.362-3.812 3.362s7.342-2.49 7.201-.872c-.141 1.62-1.13 6.351-1.13 6.351s3.672-4.856 4.378-4.856 2.4 6.35 2.4 6.35 5.507-4.607 6.072-3.735c.565.872 1.85 4.902-.519 7.518 0 0 9.399-5.815 13.634-2.964 2.043 1.375-2.29 7.364-.791 9.681.814 1.26 7.412.197 8.327 1.35 1.744 2.195-3.5 4.41-3.539 6.5-.053 2.922 4.332 5.456 1.606 6.082-.963.22-1.85 1.488-.102 3.189 1.743 1.696 6.123 3.826 4.68 3.969-2.37.234-9.069-3.687-12.456-3.808-1.003-.036-2.682 6.154-3.732 6.118-2.488-.085-4.273-4.4-6.944-4.706-1.288-.147-2.622-.697-3.926-.426-2.512.524-7.921 4.124-10.075 4.44-4.528.664.1-4.676-2.95-4.646-1.11.01-1.561 4.362-3.89 4.335-1.117-.013-4.167-2.904-5.1-4.239-1.455-2.08-5.006 4.939-6.925 4.913-2.242-.03-.049-6.185-2.429-5.475-2.704.807-7.942 7.701-9.417 7.568-5.33-.48.42-9.525-4.074-9.655-1.976-.057-2.462 4.27-4.37 4.173-2.383-.122-2.934-4.338-5.206-4.446-2.001-.095-1.67 3.894-3.543 3.767-2.43-.166-3.642-5.028-5.885-5.165-1.919-.118-2.629 4.158-4.391 4.02-1.692-.132-1.364-3.6-2.904-3.721-2.195-.172-5.03 1.63-6.845 1.46-1.731-.16 1.571-3.64.186-3.75-3.697-.293-9.985 2.989-10.202 2.934z"
        />
        <path
          fill="#748c00"
          d="M105.989 35.287s-2.589-.015-4.45-1.153c-1.86-1.137-3.666-4.402-2.772-4.95.894-.547 1.962-1.817 4.496.324 2.534 2.141 2.726 5.779 2.726 5.779z"
        />
        <path
          fill="#748c00"
          d="M107.69 34.247s-1.558-2.071-1.785-4.244c-.226-2.173 1.267-5.593 2.244-5.212.977.38 2.632.46 2.471 3.778-.16 3.319-2.93 5.678-2.93 5.678z"
        />
        <path
          fill="#748c00"
          d="M109.563 34.99s.723-2.491 2.324-3.973c1.602-1.482 5.229-2.33 5.51-1.318.28 1.013 1.206 2.39-1.543 4.246-2.748 1.857-6.291 1.045-6.291 1.045z"
        />
        <path
          fill="#748c00"
          d="M110.022 37.195s2.514-.618 4.595.03c2.081.65 4.627 3.375 3.893 4.124-.734.75-1.462 2.243-4.44.785-2.978-1.458-4.048-4.94-4.048-4.94z"
        />
        <path
          fill="#748c00"
          d="M49.634 25.261s-1.989 1.662-4.143 1.994c-2.154.332-5.634-.997-5.303-1.994.331-.996.331-2.657 3.646-2.657 3.314 0 5.8 2.657 5.8 2.657z"
        />
        <path
          fill="#748c00"
          d="M50.266 23.367s-2.523-.577-4.094-2.092c-1.57-1.515-2.628-5.094-1.636-5.434.991-.34 2.309-1.348 4.32 1.292 2.01 2.641 1.41 6.234 1.41 6.234z"
        />
        <path
          fill="#748c00"
          d="M53.628 26.344s2.574.276 4.311 1.595c1.738 1.32 3.208 4.75 2.263 5.204-.945.455-2.135 1.611-4.441-.774-2.307-2.386-2.133-6.025-2.133-6.025z"
        />
        <path
          fill="#748c00"
          d="M53.944 24.115s1.525-2.097 3.534-2.945c2.008-.849 5.706-.41 5.627.638-.079 1.047.325 2.658-2.89 3.468-3.214.81-6.27-1.161-6.27-1.161z"
        />
        <path
          fill="#748c00"
          d="M52.176 22.725s-1.05-2.372-.778-4.54c.271-2.167 2.5-5.158 3.365-4.565.865.592 2.46 1.047 1.551 4.242-.907 3.195-4.138 4.863-4.138 4.863z"
        />
        <path
          fill="#748c00"
          d="M50.979 27.027s.4 2.564-.421 4.587c-.822 2.023-3.747 4.334-4.43 3.537-.683-.796-2.105-1.65-.403-4.5s5.254-3.624 5.254-3.624z"
        />
        <path
          fill="#748c00"
          d="M87.599 28.55s-1.989 1.661-4.143 1.993c-2.154.333-5.634-.996-5.303-1.993.332-.996.332-2.658 3.646-2.658s5.8 2.658 5.8 2.658z"
        />
        <path
          fill="#748c00"
          d="M88.231 26.656s-2.523-.577-4.094-2.092c-1.57-1.515-2.627-5.094-1.636-5.435.991-.34 2.309-1.348 4.32 1.293 2.01 2.64 1.41 6.234 1.41 6.234z"
        />
        <path
          fill="#748c00"
          d="M91.593 29.633s2.574.275 4.311 1.595c1.738 1.32 3.208 4.749 2.263 5.204-.945.455-2.135 1.611-4.441-.775-2.307-2.385-2.133-6.024-2.133-6.024z"
        />
        <path
          fill="#748c00"
          d="M91.91 27.403s1.524-2.096 3.533-2.945c2.008-.848 5.706-.41 5.627.638-.079 1.048.325 2.659-2.89 3.468-3.214.81-6.27-1.16-6.27-1.16z"
        />
        <path
          fill="#748c00"
          d="M90.14 26.014s-1.048-2.372-.777-4.54c.271-2.167 2.5-5.158 3.365-4.566.865.593 2.46 1.048 1.551 4.243-.907 3.195-4.138 4.863-4.138 4.863z"
        />
        <path
          fill="#748c00"
          d="M88.944 30.316s.4 2.563-.421 4.587c-.822 2.023-3.747 4.334-4.43 3.537-.683-.797-2.104-1.65-.403-4.5 1.702-2.85 5.254-3.624 5.254-3.624z"
        />
        <path
          fill="#33450d"
          d="M17.126 56.126l2.182-4.703.829 7.308s6.131-2.658 7.457-1.993c1.326.664-1.16 2.16-1.491 2.99-.332.83-1.658 2.325-1.658 2.325s2.652-1.827 3.48-2.16c.829-.331 3.646-1.162 3.812-.498.165.665-1.989 2.16-2.32 3.489-.332 1.328-.332 2.99-.332 2.99s1.657-1.163 3.149-.831c1.491.332 2.817 1.495 2.817 1.495L32.4 69.694l-1.658 1.495 4.309.332s2.486-.83 2.154.664c-.331 1.495-2.32 2.99-2.983 3.489-.662.498-2.154 2.159-2.154 2.159s2.154 4.983 2.154 5.647c0 .665-4.474-.166-4.474-.166l.332 3.654-6.629-3.654s-2.154 1.827-2.651 3.488c-.497 1.661-2.983 3.156-2.983 3.156s-.994-2.657-.497-3.654c.497-.997-5.303-2.325-5.303-1.329 0 .997-1.989.166-2.651-2.823-.663-2.99-.166-3.655-2.652-2.16C4.23 81.487 3.4 81.155 3.4 81.155c.538-1.467.606-2.935 3.894-4.402.423-.9-4.946.576-5.558-.665-.756-1.534 6.03-5.435 6.175-5.207-.49-1.482-5.928-.096-7.911-.455 1.79-2.345 3.094-4.96 8.712-5.173l-4.469-4.465c.992-.756 2.882-1.127 6.954-.56l-2.18-2.769c2.477-1.611 4.558-.844 6.6.16z"
        />
        <path
          fill="#506700"
          d="M13.094 63.299c1.243-.83.497-2.907 1.574-3.405 1.078-.499 3.232-2.243 3.232-2.243s.663 4.817.331 5.15c-.331.332 1.326-1.08 2.817-1.744 1.492-.665 3.812-.831 3.812-.831s-1.409 3.571-1.326 4.319c.083.747 1.326-.83 2.154-1.08.829-.25 2.652-.664 2.652-.664s.082 1.993-.249 2.99c-.331.996 1.74.83 2.983.913 1.243.083 1.408 2.325-.083 3.322-1.491.997-2.734 2.16-2.734 2.16s2.403-.084 2.485 1.743c.083 1.828.829 6.063 0 5.399a44.7 44.7 0 01-1.905-1.661s-1.492 4.401-1.492 4.734c0 .332-3.811-2.658-3.645-3.322.165-.665-.663 2.74-1.16 3.156-.497.415-3.232-3.489-3.232-3.489s.083 1.994-.745 2.824c-.829.83-2.403-.83-2.735-1.993-.331-1.163-2.982 4.402-3.48 3.405-.497-.997-1.325-4.485-1.491-4.983-.166-.498-4.391 2.658-4.557 1.827-.166-.83 3.728-6.727 3.148-6.81-.58-.083-4.97 1.329-4.97 1.329s.165-6.727 2.402-6.81c2.237-.084.249-2.824.249-2.824s2.9-.166 3.314-.166c.414 0-1.492-2.409-1.492-2.409s3.232.166 4.143 1.163z"
        />
        <path
          fill="#748c00"
          d="M6.939 71.333s.866-1.681 2.219-2.517c1.353-.836 4.066-.932 4.126-.169.059.764.529 1.88-1.697 2.822-2.226.942-4.648-.136-4.648-.136z"
        />
        <path
          fill="#748c00"
          d="M22.367 80.2s-1.657-.905-2.46-2.28c-.803-1.375-.838-4.096-.075-4.138.763-.043 1.887-.488 2.776 1.764.89 2.252-.24 4.654-.24 4.654z"
        />
      </g>
    </svg>
  );
}

export default Island;
