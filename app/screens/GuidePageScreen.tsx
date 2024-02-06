import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, Renderer, Screen, Text } from "app/components"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "app/models"

export interface GuidePageScreenProps extends AppStackScreenProps<"GuidePage"> {}

export const GuidePageScreen: FC<GuidePageScreenProps> = observer(function GuidePageScreen(_props) {
  // Pull in one of our MST stores
  const { guideStore } = useStores()
  const { navigation } = _props
  console.log("GuidePageScreen _props", _props)
  const { path } = _props?.route?.params

  // if (!path) {
  //   return <Text text="No path provided" />
  // }

  function goNext() {
    // navigation.navigate("Demo", { screen: "DemoShowroom", params: {} })
    // navigation.push("GuidePageStackNavigator", { screen: "GuidePage" })
    navigation.push("GuidePage")
  }

  const page = guideStore.getGuidePage(path)
  return (
    <Screen style={$root} preset="scroll">
      <Text text="guidePage" />
      <Renderer htmlSource={page.html} />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
