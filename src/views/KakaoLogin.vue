<template>
  <section class="test">
    <div v-on:click="kakaoLoginBtn">카카오 연동</div>
  </section>
</template>

<script>

export default {
  name: 'test',
  methods: {
    kakaoLoginBtn: function () {
      // eslint-disable-next-line no-undef
      window.Kakao.init('2f40f00ea59fd6f59bfe1fd8719b7b3b') // Kakao Developers에서 요약 정보 -> JavaScript 키
      // eslint-disable-next-line no-undef
      console.log(window.Kakao.isInitialized())

      if (window.Kakao.Auth.getAccessToken()) {
        window.Kakao.API.request({
          url: '/v1/user/unlink',
          success: function (response) {
            console.log(response)
          },
          fail: function (error) {
            console.log(error)
          }
        })
        window.Kakao.Auth.setAccessToken(undefined)
      }

      window.Kakao.Auth.login({
        success: function () {
          window.Kakao.API.request({
            url: '/v2/user/me',
            data: {
              property_keys: ['kakao_account.email']
            },
            success: async function (response) {
              console.log(response)
            },
            fail: function (error) {
              console.log(error)
            }
          })
        },
        fail: function (error) {
          console.log(error)
        }
      })
    }
  }
}
</script>
