## Webpack
* 모듈 번들러: 웹 어플리케이션을 구성하는 자원(HTML, CSS, Javscript, Images 등)을 모두 각각의 모듈로 보고 이를 조합해서 병합된 하나의 결과물을 만드는 도구
* Webpack은 현재 프론트엔드 개발에서 가장 많이 사용되는 모듈 번들러

### Webpack의 등장 배경
**1. 파일 단위의 자바스크립트 모듈 관리의 필요성**
  * JavaScript의 변수 스코프는 웹 어플리케이션 개발에서 오류를 발생할 수 있으므로 Webpack이 ES6의 [Modules 문법](https://babeljs.io/docs/en/learn#modules)을 통해 변수 스코프를 제한한다.

**2. 웹 개발 작업 자동화 도구 (Web Task Manager)**
  * 모듈을 압축하고, CSS preprocessor 변환을 자동화해주기 때문에 개발자 입장에서 간편하게 개발할 수 있다.

**3. 웹 애플리케이션의 빠른 로딩 속도와 높은 성능**
  * Webpack은 기본적으로 필요한 자원은 미리 로딩하는 것이 아니라 그 때 그 때 요청하기 때문에 고성능을 보장한다.

### Webpack의 주요 속성
#### Entry
Webpack에서 웹 자원을 변환하기 위해 필요한 최초 진입점. 웹 애플리케이션의 전반적인 구조와 내용이 담겨져 있어야 한다. SPA가 아닌 경우, Entry point를 2개 이상으로 설정할 수도 있고, 이를 권장하고 있다. [#](https://joshua1988.github.io/webpack-guide/concepts/entry.html#entry-%EC%9C%A0%ED%98%95)
#### Output
Webpack을 돌리고 난 결과물의 파일 경로. 객체 형태로 구성해야 하며 다음 옵션들을 추가할 수 있다.
1. `filename`: **필수 옵션.** Webpack으로 빌드한 파일의 이름.
2. `path`: **사실상 필수 옵션.** `path.resolve()`는 인자로 넘어온 경로들을 조합하여 유효한 파일 경로를 만들어주는 Node.js API다.
3. `publicPath`: 서버 경로에 상대적인 경로를 설정할 수 있다.

filename에는 추가적인 옵션을 사용할 수 있다.
```js
{
  (...)
  output: {
    filename: 'bundle.[hash].js',
    (...)
  }
  (...)
```
1. `[name]`: `entry` 속성에서 정의한 파일의 이름
2. `[id]`: Webpack 내부적으로 사용하는 모듈 ID
3. `[hash]`: 매 빌드 시마다 바뀌는 고유 해시 값
4. `[chunkhash]`: Webpack의 각 모듈 내용을 기준으로 생성된 해시 값
#### Loader
Webpack이 웹 어플리케이션을 해석할 때 자바스크립트 파일이 아닌 웹 자원(HTML, CSS, Images, 폰트 등)들을 변환할 수 있도록 도와주는 속성. js 확장자를 사용하지 않는 파일을 빌드할 때 Loader가 없다면 오류가 발생한다. 실제 `webpack.config.js`에서 사용할 땐 `module`이라는 이름으로 사용해야 한다.
##### Loader 적용 순서
로더는 기본적으로 **오른쪽에서 왼쪽 순으로 적용**된다.
```js
module: {
  rules: [
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }
  ]
}
```
따라서 위 코드는 scss 파일에 대해 먼저 Sass 로더로 전처리(scss 파일을 css 파일로 변환)를 한 다음 Webpack에서 CSS 파일을 인식할 수 있게 CSS 로더를 적용한다. 그리고 `style-loader`에 의해 해당 CSS 파일이 웹 애플리케이션에 인라인 스타일 태그로 추가된다.
#### Plugin
Webpack의 기본적인 동작에 추가적인 기능을 제공하는 속성. Loader는 파일을 해석하고 변환하는 과정에 관여하는 반면, Plugin은 해당 결과물의 형태를 바꾸는 역할을 한다. 주로 `HtmlWebpackPlugin`이 사용되며 이는 Webpack으로 빌드한 결과물로 HTML 파일을 생성해주는 Plugin이다.

## Reference
[웹팩 핸드북](https://joshua1988.github.io/webpack-guide/) by Captain Pangyo
