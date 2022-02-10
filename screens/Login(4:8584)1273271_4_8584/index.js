import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_4_8585}>
        <View style={styles.View_4_8586} />
      </View>
      <View style={styles.View_4_8587}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e870/bd33/984f8a9dd5829b4c88d436106d284a50"
          }}
          style={styles.ImageBackground_4_8588}
        />
        <View style={styles.View_4_8589}>
          <View style={styles.View_4_8590}>
            <View style={styles.View_4_8591}>
              <View style={styles.View_4_8592}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f8f/237d/bae8ec8f922fa0d8fe2e6f256a8749c5"
                  }}
                  style={styles.ImageBackground_4_8593}
                />
              </View>
              <View style={styles.View_4_8595}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d75a/a5f1/42d16a17a53eb26c7a0c13662c31f44e"
                  }}
                  style={styles.ImageBackground_4_8596}
                />
              </View>
              <View style={styles.View_4_8598}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7728/ddc6/aa0d4fde95ec4d83c80f00a0a4ad0d38"
                  }}
                  style={styles.ImageBackground_4_8599}
                />
              </View>
              <View style={styles.View_4_8601}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9373/86d9/e75dbdc2f1ce83578f1bf913bc8bd6b3"
                  }}
                  style={styles.ImageBackground_4_8602}
                />
              </View>
              <View style={styles.View_4_8604}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a224/4727/fd7302b30bd3a5a60a5c4133c04d56da"
                  }}
                  style={styles.ImageBackground_4_8605}
                />
              </View>
              <View style={styles.View_4_8607}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f34/fcf7/6a1044d9a4488c56cd24c35ada5ffa21"
                  }}
                  style={styles.ImageBackground_4_8608}
                />
              </View>
              <View style={styles.View_4_8610}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bb3/e9d8/ef57061c993e363f74df04df29fbda89"
                  }}
                  style={styles.ImageBackground_4_8611}
                />
              </View>
              <View style={styles.View_4_8613}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1bb3/e9d8/ef57061c993e363f74df04df29fbda89"
                  }}
                  style={styles.ImageBackground_4_8614}
                />
              </View>
            </View>
            <View style={styles.View_4_8616}>
              <View style={styles.View_4_8617}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/792a/475b/f1c6c595e1d2c9686b170b338ed7cfb7"
                  }}
                  style={styles.ImageBackground_4_8618}
                />
              </View>
              <View style={styles.View_4_8620}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5691/ccf1/7e7b572ed47d1494185b88c751f3f14e"
                  }}
                  style={styles.ImageBackground_4_8621}
                />
              </View>
              <View style={styles.View_4_8623}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e090/ac7a/70abc07af154009a009e810422d37c10"
                  }}
                  style={styles.ImageBackground_4_8624}
                />
              </View>
              <View style={styles.View_4_8626}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3205/2738/fdba6aec89b3bac9903b8ba16130a9f8"
                  }}
                  style={styles.ImageBackground_4_8627}
                />
              </View>
              <View style={styles.View_4_8629}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/633f/0a38/1c14344b5bb250c3b417b7b87cf94a25"
                  }}
                  style={styles.ImageBackground_4_8630}
                />
              </View>
              <View style={styles.View_4_8632}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fab5/7073/83b1c910dd0804b52dec47c77d01d264"
                  }}
                  style={styles.ImageBackground_4_8633}
                />
              </View>
              <View style={styles.View_4_8635}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5dd/cc2e/9ca6bd21f8d924dcfe7a7f802cc694f2"
                  }}
                  style={styles.ImageBackground_4_8636}
                />
              </View>
              <View style={styles.View_4_8638}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5dd/cc2e/9ca6bd21f8d924dcfe7a7f802cc694f2"
                  }}
                  style={styles.ImageBackground_4_8639}
                />
              </View>
            </View>
            <View style={styles.View_4_8641}>
              <View style={styles.View_4_8642}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0871/72d7/9203edc21527865f7be264f032587087"
                  }}
                  style={styles.ImageBackground_4_8643}
                />
              </View>
              <View style={styles.View_4_8645}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eeaa/ea84/75664b3a13d5d3be5d84644f7bd9d7c7"
                  }}
                  style={styles.ImageBackground_4_8646}
                />
              </View>
              <View style={styles.View_4_8648}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13ba/b642/3514f3999166bd6eca4b037d1e5ce8ad"
                  }}
                  style={styles.ImageBackground_4_8649}
                />
              </View>
              <View style={styles.View_4_8651}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de78/8ed0/1572eda9c3b39e68b5ea9db4a11313a8"
                  }}
                  style={styles.ImageBackground_4_8652}
                />
              </View>
              <View style={styles.View_4_8654}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f3d/43f2/5d67fc32924814f5af97ba1affc038c9"
                  }}
                  style={styles.ImageBackground_4_8655}
                />
              </View>
              <View style={styles.View_4_8657}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/451c/eeb3/cd25c61e6d9ba84410fe83c28b4fd357"
                  }}
                  style={styles.ImageBackground_4_8658}
                />
              </View>
              <View style={styles.View_4_8660}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a382/692e/0d7100e1759a058d03d363ea478993e8"
                  }}
                  style={styles.ImageBackground_4_8661}
                />
              </View>
              <View style={styles.View_4_8663}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7389/77f6/15c66a8e841b60154081f22a1f928385"
                  }}
                  style={styles.ImageBackground_4_8664}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_4_8666}>
            <View style={styles.View_4_8667}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af4c/d837/4e2a8f8158aeb7ff09752d465d5e9b69"
                }}
                style={styles.ImageBackground_4_8668}
              />
            </View>
            <View style={styles.View_4_8670}>
              <View style={styles.View_4_8671}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cd6/a026/822204f5cf5d9349104ec661cf30788d"
                  }}
                  style={styles.ImageBackground_4_8672}
                />
              </View>
              <View style={styles.View_4_8674}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c68/df21/00e83790c520c9c2ba47c6a3d25e79ed"
                  }}
                  style={styles.ImageBackground_4_8675}
                />
              </View>
              <View style={styles.View_4_8677}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19ec/2ea6/3f0195bad45c7ea3be73fe1118fadedc"
                  }}
                  style={styles.ImageBackground_4_8678}
                />
              </View>
              <View style={styles.View_4_8680}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f37/09f4/87f238a5c5ed9165a7cdde8e4f482569"
                  }}
                  style={styles.ImageBackground_4_8681}
                />
              </View>
              <View style={styles.View_4_8683}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e9ae/d7a7/01c9785f0598f228f91ee2f0ca2fc72e"
                  }}
                  style={styles.ImageBackground_4_8684}
                />
              </View>
              <View style={styles.View_4_8686}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/075b/f402/b8a0f2eaf2cf9ad130675760c8c3c618"
                  }}
                  style={styles.ImageBackground_4_8687}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_4_8689}>
          <View style={styles.View_4_8690}>
            <View style={styles.View_4_8691}>
              <View style={styles.View_4_8692}>
                <View style={styles.View_4_8693}>
                  <View style={styles.View_4_8694}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee2c/ba73/72e148133a41d69a9cdec833c9cad0d5"
                      }}
                      style={styles.ImageBackground_4_8695}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_4_8697}>
              <View style={styles.View_4_8698}>
                <View style={styles.View_4_8699}>
                  <View style={styles.View_4_8700}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fcef/70f9/a0cfd48c0ac0a5ea99b058e5a4670e08"
                      }}
                      style={styles.ImageBackground_4_8701}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_4_8703}>
              <View style={styles.View_4_8704}>
                <View style={styles.View_4_8705}>
                  <View style={styles.View_4_8706}>
                    <View style={styles.View_4_8707}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/098f/325e/dd11b063f7b29c63a292dfb9682b9920"
                        }}
                        style={styles.ImageBackground_4_8708}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_4_8710}>
              <View style={styles.View_4_8711}>
                <View style={styles.View_4_8712}>
                  <View style={styles.View_4_8713}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4da/143f/22ee0f746ca4cb5368a44dd4ef4ef36d"
                      }}
                      style={styles.ImageBackground_4_8714}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_4_8716}>
            <View style={styles.View_4_8717}>
              <View style={styles.View_4_8718}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c65d/2efb/3fb94d4761eff1d63e5f3f0ef755d1f7"
                  }}
                  style={styles.ImageBackground_4_8719}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_4_8721}>
          <View style={styles.View_4_8722}>
            <View style={styles.View_4_8723}>
              <View style={styles.View_4_8724}>
                <View style={styles.View_4_8725}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5066/04d6/63b5d3b7fe54183846a481743f92c187"
                    }}
                    style={styles.ImageBackground_4_8726}
                  />
                </View>
              </View>
              <View style={styles.View_4_8728}>
                <View style={styles.View_4_8729}>
                  <View style={styles.View_4_8730}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0ab/32f8/36283a96278862009eaba4b11dcc3534"
                      }}
                      style={styles.ImageBackground_4_8731}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_4_8733}>
                <View style={styles.View_4_8734}>
                  <View style={styles.View_4_8735}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00a1/39a0/be165798245ceba2d1e768e8940fc399"
                      }}
                      style={styles.ImageBackground_4_8736}
                    />
                  </View>
                </View>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bca/216f/5b1a2967c0f8433836e48bc7459534f4"
              }}
              style={styles.ImageBackground_4_8738}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8987/db62/672ee67b735ddf2e1cf9d252bd936835"
              }}
              style={styles.ImageBackground_4_8740}
            />
          </View>
          <View style={styles.View_4_8742}>
            <View style={styles.View_4_8743}>
              <View style={styles.View_4_8744}>
                <View style={styles.View_4_8745}>
                  <View style={styles.View_4_8746}>
                    <View style={styles.View_4_8747}>
                      <View style={styles.View_4_8748}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42ce/03e6/fc75af7a63fa4ccf5912bd12f95e5aa8"
                          }}
                          style={styles.ImageBackground_4_8749}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_4_8751}>
                  <View style={styles.View_4_8752}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7073/b905/ef6cdd4bbe7db7d069d735592efe087f"
                      }}
                      style={styles.ImageBackground_4_8753}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_4_8755}>
              <View style={styles.View_4_8756}>
                <View style={styles.View_4_8757}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9087/ac68/fb3c67fb633203471462161a6320317e"
                    }}
                    style={styles.ImageBackground_4_8758}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_4_8760}>
              <View style={styles.View_4_8761}>
                <View style={styles.View_4_8762}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9087/ac68/fb3c67fb633203471462161a6320317e"
                    }}
                    style={styles.ImageBackground_4_8763}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_4_8765}>
              <View style={styles.View_4_8766}>
                <View style={styles.View_4_8767}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29d1/1c91/811abfd6233604b60571caa57a948c6f"
                    }}
                    style={styles.ImageBackground_4_8768}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_4_8770}>
              <View style={styles.View_4_8771}>
                <View style={styles.View_4_8772}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bcc/72db/b45d3bb641d44ea82114136651fbff9b"
                    }}
                    style={styles.ImageBackground_4_8773}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_4_8775}>
              <View style={styles.View_4_8776}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d258/58e9/a24fc436ef3116d7feece04e44af4b22"
                  }}
                  style={styles.ImageBackground_4_8777}
                />
              </View>
            </View>
            <View style={styles.View_4_8779}>
              <View style={styles.View_4_8780}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b328/e6de/283f2224c6bdb1613465539a41d1b845"
                  }}
                  style={styles.ImageBackground_4_8781}
                />
              </View>
            </View>
            <View style={styles.View_4_8783}>
              <View style={styles.View_4_8784}>
                <View style={styles.View_4_8785}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0113/f6de/eaeddb4920a66433f1478913a615cec0"
                    }}
                    style={styles.ImageBackground_4_8786}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_4_8788}>
              <View style={styles.View_4_8789}>
                <View style={styles.View_4_8790}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc77/115c/2b1d6a8799d1e30992bd6b2e29581f1d"
                    }}
                    style={styles.ImageBackground_4_8791}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_4_8793}>
              <View style={styles.View_4_8794}>
                <View style={styles.View_4_8795}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3425/db4a/6577061a7ee02c99206df13a8af12059"
                    }}
                    style={styles.ImageBackground_4_8796}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_4_8798}>
              <View style={styles.View_4_8799}>
                <View style={styles.View_4_8800}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1920/ec66/a2eb20e20b99ca1bc6a57654f6fa51cf"
                    }}
                    style={styles.ImageBackground_4_8801}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_4_8803}>
            <View style={styles.View_4_8804}>
              <View style={styles.View_4_8805}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/30d0/31d7/4cd64c725dc1f859859890e0731b3bd4"
                  }}
                  style={styles.ImageBackground_4_8806}
                />
              </View>
              <View style={styles.View_4_8808}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18f7/c79b/a9cceb1091c6e79fc84d4104a848bec5"
                  }}
                  style={styles.ImageBackground_4_8809}
                />
              </View>
              <View style={styles.View_4_8811}>
                <View style={styles.View_4_8812}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cf0/383d/c6b95af1c7b61ffeaa469f8d71274b03"
                    }}
                    style={styles.ImageBackground_4_8813}
                  />
                </View>
              </View>
              <View style={styles.View_4_8815}>
                <View style={styles.View_4_8816}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7af2/ec51/fe5bd7c5d236dd0f01aff3dda2659ef9"
                    }}
                    style={styles.ImageBackground_4_8817}
                  />
                </View>
              </View>
              <View style={styles.View_4_8819}>
                <View style={styles.View_4_8820}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cbd/9479/bb5c60dcd15c28ca29b9214714ccb4a2"
                    }}
                    style={styles.ImageBackground_4_8821}
                  />
                </View>
              </View>
              <View style={styles.View_4_8823}>
                <View style={styles.View_4_8824}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f97d/97bf/8e1751837fbeef35db8834f0438e76e9"
                    }}
                    style={styles.ImageBackground_4_8825}
                  />
                </View>
              </View>
              <View style={styles.View_4_8827}>
                <View style={styles.View_4_8828}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d8f/87e2/b5f75fc2721860b3804738d4f660e3d9"
                    }}
                    style={styles.ImageBackground_4_8829}
                  />
                </View>
              </View>
              <View style={styles.View_4_8831}>
                <View style={styles.View_4_8832}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb2e/5e17/381a7695ecdeb75e7c88b6ab51d32b68"
                    }}
                    style={styles.ImageBackground_4_8833}
                  />
                </View>
              </View>
              <View style={styles.View_4_8835}>
                <View style={styles.View_4_8836}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af62/9e85/024e0f4920bbd951658a7e18ce73c4c5"
                    }}
                    style={styles.ImageBackground_4_8837}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_4_8839}>
            <View style={styles.View_4_8840}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4eb6/b783/60442ac452c622ab9996a005ebd0c5b8"
                }}
                style={styles.ImageBackground_4_8841}
              />
              <View style={styles.View_4_8843}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4adc/da30/3d6cf8c39a4fe6e7a9d1f58f5e29ec1c"
                  }}
                  style={styles.ImageBackground_4_8844}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbc0/047d/b0d24bb4ab3d25107a91f2e058731ad8"
                }}
                style={styles.ImageBackground_4_8846}
              />
              <View style={styles.View_4_8848}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f14e/6e96/d5ee0abfc86e86784d7c58d8b20a9af9"
                  }}
                  style={styles.ImageBackground_4_8849}
                />
              </View>
              <View style={styles.View_4_8851}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f4e/147d/f6f40bc586512bc664b1ba2ebdc5f9d0"
                  }}
                  style={styles.ImageBackground_4_8852}
                />
              </View>
              <View style={styles.View_4_8854}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6ac/7c37/9b87b89c7d8a70ed14bf136015a581c2"
                  }}
                  style={styles.ImageBackground_4_8855}
                />
              </View>
              <View style={styles.View_4_8857}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f0f/de96/499c2fb7356d781d0653f94413a6ddfc"
                  }}
                  style={styles.ImageBackground_4_8858}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43d0/99aa/0300d2f1e4b62d349af0e699870902fc"
              }}
              style={styles.ImageBackground_4_8860}
            />
            <View style={styles.View_4_8862}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e794/b92c/9915e5523c3cbd51eb260f85f879904d"
                }}
                style={styles.ImageBackground_4_8863}
              />
            </View>
            <View style={styles.View_4_8865}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f012/9877/258f953396130125850b813fa70d8a3b"
                }}
                style={styles.ImageBackground_4_8866}
              />
            </View>
          </View>
          <View style={styles.View_4_8868}>
            <View style={styles.View_4_8869}>
              <View style={styles.View_4_8870}>
                <View style={styles.View_4_8871}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c162/435c/ffdafc0a44a1c2f6a9e2caded4ef57f8"
                    }}
                    style={styles.ImageBackground_4_8872}
                  />
                </View>
              </View>
              <View style={styles.View_4_8874}>
                <View style={styles.View_4_8875}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72aa/e0e9/8584f08993dd64641dc9cb80881c2fa5"
                    }}
                    style={styles.ImageBackground_4_8876}
                  />
                </View>
              </View>
              <View style={styles.View_4_8878}>
                <View style={styles.View_4_8879}>
                  <View style={styles.View_4_8880}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/999e/d0e0/ddb958d991da8e5176e3d1289fe74b2c"
                      }}
                      style={styles.ImageBackground_4_8881}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_4_8883}>
                <View style={styles.View_4_8884}>
                  <View style={styles.View_4_8885}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce31/d026/08948f8d0413b2e2b242dcab332f4701"
                      }}
                      style={styles.ImageBackground_4_8886}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_4_8888}>
                <View style={styles.View_4_8889}>
                  <View style={styles.View_4_8890}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a58/bd89/a09076f40103614b7419671d550df95d"
                      }}
                      style={styles.ImageBackground_4_8891}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_4_8893}>
                <View style={styles.View_4_8894}>
                  <View style={styles.View_4_8895}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fb1/fd38/a89e3f38978bc6031b000147d5239259"
                      }}
                      style={styles.ImageBackground_4_8896}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_4_8898}>
            <View style={styles.View_4_8899}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a15/87ba/5ff136b0a0af239273d37dda698dbd36"
                }}
                style={styles.ImageBackground_4_8900}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d4b/7303/ca442930119f99ce809110ca9ab6fee4"
              }}
              style={styles.ImageBackground_4_8902}
            />
          </View>
          <View style={styles.View_4_8904}>
            <View style={styles.View_4_8905}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b33/cff5/eb02bcdba22944db644c7d265c36db96"
                }}
                style={styles.ImageBackground_4_8906}
              />
            </View>
            <View style={styles.View_4_8908}>
              <View style={styles.View_4_8909}>
                <View style={styles.View_4_8910}>
                  <View style={styles.View_4_8911}>
                    <View style={styles.View_4_8912}>
                      <View style={styles.View_4_8913}>
                        <View style={styles.View_4_8914}>
                          <View style={styles.View_4_8915}>
                            <View style={styles.View_4_8916}>
                              <View style={styles.View_4_8917}>
                                <View style={styles.View_4_8918}>
                                  <View style={styles.View_4_8919}>
                                    <View style={styles.View_4_8920}>
                                      <View style={styles.View_4_8921}>
                                        <ImageBackground
                                          source={{
                                            uri:
                                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a46/e369/f0afef7ddd69379ef3da72c0aec5a35c"
                                          }}
                                          style={styles.ImageBackground_4_8922}
                                        />
                                      </View>
                                    </View>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                        <View style={styles.View_4_8924}>
                          <View style={styles.View_4_8925}>
                            <View style={styles.View_4_8926}>
                              <View style={styles.View_4_8927}>
                                <View style={styles.View_4_8928}>
                                  <View style={styles.View_4_8929}>
                                    <View style={styles.View_4_8930}>
                                      <View style={styles.View_4_8931}>
                                        <ImageBackground
                                          source={{
                                            uri:
                                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76c7/7176/f5208d2091b5b79f68632a99217b7940"
                                          }}
                                          style={styles.ImageBackground_4_8932}
                                        />
                                      </View>
                                    </View>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_4_8934}>
                    <View style={styles.View_4_8935}>
                      <View style={styles.View_4_8936}>
                        <View style={styles.View_4_8937}>
                          <View style={styles.View_4_8938}>
                            <View style={styles.View_4_8939}>
                              <View style={styles.View_4_8940}>
                                <View style={styles.View_4_8941}>
                                  <View style={styles.View_4_8942}>
                                    <View style={styles.View_4_8943}>
                                      <View style={styles.View_4_8944}>
                                        <View style={styles.View_4_8945}>
                                          <View style={styles.View_4_8946}>
                                            <View style={styles.View_4_8947}>
                                              <ImageBackground
                                                source={{
                                                  uri:
                                                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da07/efb1/ff680a745a77c6219f42575ebee96c50"
                                                }}
                                                style={
                                                  styles.ImageBackground_4_8948
                                                }
                                              />
                                            </View>
                                          </View>
                                        </View>
                                      </View>
                                    </View>
                                  </View>
                                </View>
                              </View>
                              <View style={styles.View_4_8950}>
                                <View style={styles.View_4_8951}>
                                  <View style={styles.View_4_8952}>
                                    <View style={styles.View_4_8953}>
                                      <View style={styles.View_4_8954}>
                                        <View style={styles.View_4_8955}>
                                          <View style={styles.View_4_8956}>
                                            <View style={styles.View_4_8957}>
                                              <View style={styles.View_4_8958}>
                                                <ImageBackground
                                                  source={{
                                                    uri:
                                                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7269/45a7/44ad6f94e64c0c28eb06fbb540397b40"
                                                  }}
                                                  style={
                                                    styles.ImageBackground_4_8959
                                                  }
                                                />
                                              </View>
                                            </View>
                                          </View>
                                        </View>
                                      </View>
                                    </View>
                                  </View>
                                </View>
                              </View>
                            </View>
                            <View style={styles.View_4_8961}>
                              <View style={styles.View_4_8962}>
                                <View style={styles.View_4_8963}>
                                  <View style={styles.View_4_8964}>
                                    <View style={styles.View_4_8965}>
                                      <View style={styles.View_4_8966}>
                                        <View style={styles.View_4_8967}>
                                          <View style={styles.View_4_8968}>
                                            <View style={styles.View_4_8969}>
                                              <ImageBackground
                                                source={{
                                                  uri:
                                                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da07/efb1/ff680a745a77c6219f42575ebee96c50"
                                                }}
                                                style={
                                                  styles.ImageBackground_4_8970
                                                }
                                              />
                                            </View>
                                          </View>
                                        </View>
                                      </View>
                                    </View>
                                  </View>
                                </View>
                              </View>
                              <View style={styles.View_4_8972}>
                                <View style={styles.View_4_8973}>
                                  <View style={styles.View_4_8974}>
                                    <View style={styles.View_4_8975}>
                                      <View style={styles.View_4_8976}>
                                        <View style={styles.View_4_8977}>
                                          <View style={styles.View_4_8978}>
                                            <View style={styles.View_4_8979}>
                                              <View style={styles.View_4_8980}>
                                                <ImageBackground
                                                  source={{
                                                    uri:
                                                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7269/45a7/44ad6f94e64c0c28eb06fbb540397b40"
                                                  }}
                                                  style={
                                                    styles.ImageBackground_4_8981
                                                  }
                                                />
                                              </View>
                                            </View>
                                          </View>
                                        </View>
                                      </View>
                                    </View>
                                  </View>
                                </View>
                              </View>
                            </View>
                            <View style={styles.View_4_8983}>
                              <View style={styles.View_4_8984}>
                                <View style={styles.View_4_8985}>
                                  <View style={styles.View_4_8986}>
                                    <View style={styles.View_4_8987}>
                                      <View style={styles.View_4_8988}>
                                        <View style={styles.View_4_8989}>
                                          <View style={styles.View_4_8990}>
                                            <View style={styles.View_4_8991}>
                                              <ImageBackground
                                                source={{
                                                  uri:
                                                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/16aa/6bd4/7bf3a54d1cd4e81707ab990ea57069d8"
                                                }}
                                                style={
                                                  styles.ImageBackground_4_8992
                                                }
                                              />
                                            </View>
                                          </View>
                                        </View>
                                      </View>
                                    </View>
                                  </View>
                                </View>
                              </View>
                            </View>
                            <View style={styles.View_4_8994}>
                              <View style={styles.View_4_8995}>
                                <View style={styles.View_4_8996}>
                                  <View style={styles.View_4_8997}>
                                    <View style={styles.View_4_8998}>
                                      <View style={styles.View_4_8999}>
                                        <View style={styles.View_4_9000}>
                                          <View style={styles.View_4_9001}>
                                            <View style={styles.View_4_9002}>
                                              <ImageBackground
                                                source={{
                                                  uri:
                                                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c85/e5d3/f44740dad5d040fee4a4445ea8c8ee68"
                                                }}
                                                style={
                                                  styles.ImageBackground_4_9003
                                                }
                                              />
                                            </View>
                                          </View>
                                        </View>
                                      </View>
                                    </View>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.View_4_9005}>
                        <View style={styles.View_4_9006}>
                          <View style={styles.View_4_9007}>
                            <View style={styles.View_4_9008}>
                              <View style={styles.View_4_9009}>
                                <View style={styles.View_4_9010}>
                                  <View style={styles.View_4_9011}>
                                    <View style={styles.View_4_9012}>
                                      <ImageBackground
                                        source={{
                                          uri:
                                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ae2/5669/8422f40b6feb2b61da146caf3b039c82"
                                        }}
                                        style={styles.ImageBackground_4_9013}
                                      />
                                    </View>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.View_4_9015}>
                        <View style={styles.View_4_9016}>
                          <View style={styles.View_4_9017}>
                            <View style={styles.View_4_9018}>
                              <View style={styles.View_4_9019}>
                                <View style={styles.View_4_9020}>
                                  <View style={styles.View_4_9021}>
                                    <View style={styles.View_4_9022}>
                                      <ImageBackground
                                        source={{
                                          uri:
                                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7faa/cf47/385bfcb163b0a3bfe66520d0d5f7e3cf"
                                        }}
                                        style={styles.ImageBackground_4_9023}
                                      />
                                    </View>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_4_9025}>
              <View style={styles.View_4_9026}>
                <View style={styles.View_4_9027}>
                  <View style={styles.View_4_9028}>
                    <View style={styles.View_4_9029}>
                      <View style={styles.View_4_9030}>
                        <View style={styles.View_4_9031}>
                          <View style={styles.View_4_9032}>
                            <View style={styles.View_4_9033}>
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba0b/544a/cdd204f64ee89b520dd6a1c77289d0f6"
                                }}
                                style={styles.ImageBackground_4_9034}
                              />
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_4_9036}>
                <View style={styles.View_4_9037}>
                  <View style={styles.View_4_9038}>
                    <View style={styles.View_4_9039}>
                      <View style={styles.View_4_9040}>
                        <View style={styles.View_4_9041}>
                          <View style={styles.View_4_9042}>
                            <View style={styles.View_4_9043}>
                              <View style={styles.View_4_9044}>
                                <ImageBackground
                                  source={{
                                    uri:
                                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd37/f80f/63f210a963db4a6905270b54153a274e"
                                  }}
                                  style={styles.ImageBackground_4_9045}
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_4_9047}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63c4/5bc6/a960c51ae9eeefcd24ac9a1019d31209"
                }}
                style={styles.ImageBackground_4_9048}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_4_9050}>
          <View style={styles.View_4_9051}>
            <View style={styles.View_4_9052}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb2d/19ff/8a8f6f0ccebbb3213dc5f4b6993322f8"
                }}
                style={styles.ImageBackground_4_9053}
              />
            </View>
            <View style={styles.View_4_9055}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97fe/9adf/3da011ad365e4630073b04d90814b519"
                }}
                style={styles.ImageBackground_4_9056}
              />
            </View>
            <View style={styles.View_4_9058}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9182/7976/d8a6f4a846fc3ad30bd61da4b1c64172"
                }}
                style={styles.ImageBackground_4_9059}
              />
            </View>
            <View style={styles.View_4_9061}>
              <View style={styles.View_4_9062}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5058/ce52/ec7bfd879ea08fa12367ba2accfd3d77"
                  }}
                  style={styles.ImageBackground_4_9063}
                />
              </View>
            </View>
            <View style={styles.View_4_9065}>
              <View style={styles.View_4_9066}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e55f/06d7/01aaf1fd0503820e347932e9339bcf67"
                  }}
                  style={styles.ImageBackground_4_9067}
                />
              </View>
            </View>
            <View style={styles.View_4_9069}>
              <View style={styles.View_4_9070}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9752/4bbb/037776e237a6e36db8111995361ec81f"
                  }}
                  style={styles.ImageBackground_4_9071}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_4_9073}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3aa/c2ae/8b39dd33fbc8a5331127a0e3be9ab5b8"
              }}
              style={styles.ImageBackground_4_9074}
            />
          </View>
          <View style={styles.View_4_9076}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f02/bf64/9b5d69a799a88d06f3abb31436b16181"
              }}
              style={styles.ImageBackground_4_9077}
            />
          </View>
          <View style={styles.View_4_9079}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
              }}
              style={styles.ImageBackground_4_9080}
            />
          </View>
          <View style={styles.View_4_9082}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31f9/27e8/5cbb7657846b51cb0e1dad9027b1d2ba"
              }}
              style={styles.ImageBackground_4_9083}
            />
          </View>
          <View style={styles.View_4_9085}>
            <View style={styles.View_4_9086}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1d6/a901/cdf950b5a1585528b2aae105f6ebb16d"
                }}
                style={styles.ImageBackground_4_9087}
              />
            </View>
          </View>
          <View style={styles.View_4_9089}>
            <View style={styles.View_4_9090}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd72/217b/c68856536888137a4689d36986cb9caf"
                }}
                style={styles.ImageBackground_4_9091}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_4_9093}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86f9/e027/1d491a3956b2a822ca4015cab08dd4e0"
            }}
            style={styles.ImageBackground_4_9094}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb76/ef46/009534acd74e3ea0729e716642a185f8"
            }}
            style={styles.ImageBackground_4_9096}
          />
        </View>
        <View style={styles.View_4_9098}>
          <View style={styles.View_4_9099}>
            <View style={styles.View_4_9100}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2428/dd0e/e7628264a3ba858f5b89559e09df8a31"
                }}
                style={styles.ImageBackground_4_9101}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e56d/0138/1951d50fa829defa4f74d728cbd52194"
                }}
                style={styles.ImageBackground_4_9103}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e56d/0138/1951d50fa829defa4f74d728cbd52194"
                }}
                style={styles.ImageBackground_4_9105}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e56d/0138/1951d50fa829defa4f74d728cbd52194"
                }}
                style={styles.ImageBackground_4_9107}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e56d/0138/1951d50fa829defa4f74d728cbd52194"
                }}
                style={styles.ImageBackground_4_9109}
              />
              <View style={styles.View_4_9111}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5553/1629/f45e53c911f89f71b6740dd5899db0bf"
                  }}
                  style={styles.ImageBackground_4_9112}
                />
              </View>
              <View style={styles.View_4_9114}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02eb/d05a/c5d2654a55d43910b8f5af90eb15aafe"
                  }}
                  style={styles.ImageBackground_4_9115}
                />
              </View>
              <View style={styles.View_4_9117}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e218/b269/ca459dd91a58b7613736286bb7e85c9f"
                  }}
                  style={styles.ImageBackground_4_9118}
                />
              </View>
              <View style={styles.View_4_9120}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6b9/a0a2/6a3949963318b7dfd472edc52779df70"
                  }}
                  style={styles.ImageBackground_4_9121}
                />
              </View>
            </View>
            <View style={styles.View_4_9123}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/700d/98ff/309f038cff4d1b6819a0a9fb2a7576fc"
                }}
                style={styles.ImageBackground_4_9124}
              />
            </View>
          </View>
          <View style={styles.View_4_9126}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9127}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9129}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9131}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9133}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9135}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9137}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9139}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9141}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9143}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9145}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9147}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9149}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9151}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9153}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9155}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9157}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9159}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9161}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9163}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9165}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9167}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9169}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9171}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9173}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9175}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9177}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9179}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9181}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9183}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9185}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9187}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9189}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9191}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9193}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9195}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9197}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9199}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9201}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe35/211f/dc7181b3aadb09ccac6ad92f6f1f3ed4"
              }}
              style={styles.ImageBackground_4_9203}
            />
          </View>
        </View>
        <View style={styles.View_4_9205}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d154/3b0b/678480393aec827d07bf2ca2787d6a94"
            }}
            style={styles.ImageBackground_4_9206}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e233/3fd4/132e2da93221fbed6dd7b26d35912c91"
            }}
            style={styles.ImageBackground_4_9208}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d804/811d/dc495ed1ca67a66e3b6da90e6d269ce9"
            }}
            style={styles.ImageBackground_4_9210}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a87/801b/e5144915dfee0b315755f3ba4cf5bcdc"
            }}
            style={styles.ImageBackground_4_9212}
          />
        </View>
      </View>
      <View style={styles.View_4_9214}>
        <View style={styles.View_4_9215}>
          <Text style={styles.Text_4_9215}>
            Don’t have account yet? New Account
          </Text>
        </View>
      </View>
      <View style={styles.View_4_9216}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1323/10ec/35be7578f6f263651ee896489625b7bb"
          }}
          style={styles.ImageBackground_4_9217}
        />
        <View style={styles.View_4_9219}>
          <View style={styles.View_4_9220}>
            <Text style={styles.Text_4_9220}>Log in</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_4_9221}>
        <View style={styles.View_4_9222}>
          <Text style={styles.Text_4_9222}>Reset Password?</Text>
        </View>
      </View>
      <View style={styles.View_4_9223}>
        <View style={styles.View_4_9224}>
          <View style={styles.View_4_9225} />
        </View>
        <View style={styles.View_4_9226}>
          <View style={styles.View_4_9227}>
            <Text style={styles.Text_4_9227}>Remember me</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_4_9228}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc62/0823/b7fd79c43e11405ec2480b61204b2e34"
          }}
          style={styles.ImageBackground_4_9229}
        />
        <View style={styles.View_4_9231}>
          <View style={styles.View_4_9232}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5b5/54b6/50755ba8fdcfe921f3cb96ffd129d957"
              }}
              style={styles.ImageBackground_4_9233}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f3a/ddb7/dae68e870d39fc5ecec600c310192f72"
              }}
              style={styles.ImageBackground_4_9234}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28b5/f21a/a2da0a4c0e3f187ba5e279eea5ae5f71"
          }}
          style={styles.ImageBackground_4_9237}
        />
        <View style={styles.View_4_9246}>
          <View style={styles.View_4_9247}>
            <Text style={styles.Text_4_9247}>Password</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_4_9248}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc62/0823/b7fd79c43e11405ec2480b61204b2e34"
          }}
          style={styles.ImageBackground_4_9249}
        />
        <View style={styles.View_4_9251}>
          <View style={styles.View_4_9252}>
            <Text style={styles.Text_4_9252}>example@gmail.com</Text>
          </View>
        </View>
        <View style={styles.View_4_9253}>
          <View style={styles.View_4_9254}>
            <Text style={styles.Text_4_9254}>Email Address</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_4_9255}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d0a/46df/e2e70dc0aac2bc15a333c54d22164e36"
          }}
          style={styles.ImageBackground_4_9256}
        />
        <View style={styles.View_4_9259}>
          <View style={styles.View_4_9260}>
            <Text style={styles.Text_4_9260}>Or</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_4_9261}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e46/1687/e70458c241213435f014aa59a42b753d"
          }}
          style={styles.ImageBackground_4_9262}
        />
        <View style={styles.View_4_9264}>
          <View style={styles.View_4_9265}>
            <Text style={styles.Text_4_9265}>Facebook</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a4a/77e8/9db2300f4fc28d6998b3f72e683380d9"
          }}
          style={styles.ImageBackground_4_9266}
        />
      </View>
      <View style={styles.View_4_9268}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7c4/89fe/b73afbc9922eab5538481c23887c0f7a"
          }}
          style={styles.ImageBackground_4_9269}
        />
        <View style={styles.View_4_9271}>
          <View style={styles.View_4_9272}>
            <Text style={styles.Text_4_9272}>Google</Text>
          </View>
        </View>
        <View style={styles.View_4_9273}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a52/becb/ac0d73318ca6c729d10287e0e8dc1c9d"
            }}
            style={styles.ImageBackground_4_9274}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e887/fb50/ac324d94d934beafe0d2075372ea7fb6"
            }}
            style={styles.ImageBackground_4_9275}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9e8/645b/96dbf7adfbbc2dd0ddaecb42e31a8c20"
            }}
            style={styles.ImageBackground_4_9277}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cb2/4e2c/4bfe78c459e59cb8e870b69519670719"
            }}
            style={styles.ImageBackground_4_9278}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b14c/bfbf/85dc7d7338804b669d680efd3d50a40e"
            }}
            style={styles.ImageBackground_4_9279}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fb4/82cd/6680411bf25271e9fa1a57ea4b1915aa"
            }}
            style={styles.ImageBackground_4_9280}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1f0/8a1e/5aa5d0574d36a0805042aec50e0e5a44"
            }}
            style={styles.ImageBackground_4_9281}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d36/74bb/a87a10a6b9ecfdeeea46b6944f7d518c"
            }}
            style={styles.ImageBackground_4_9282}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/048c/5b31/74c14c6f724bd2a29e35c6ab3081b13c"
            }}
            style={styles.ImageBackground_4_9283}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96b9/587e/e6fd56ece176c8f4401c2dc19c1cfeec"
            }}
            style={styles.ImageBackground_4_9284}
          />
        </View>
      </View>
      <View style={styles.View_4_9285}>
        <View style={styles.View_4_9286}>
          <View style={styles.View_4_9287}>
            <Text style={styles.Text_4_9287}>Log in</Text>
          </View>
        </View>
        <View style={styles.View_4_9288}>
          <View style={styles.View_4_9289}>
            <View style={styles.View_4_9290}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43d4/5ab8/2502af11f28e94975a2f16f4cf809ac9"
                }}
                style={styles.ImageBackground_4_9291}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d953/e040/e2fa70fc704ed9b83a96026e4a1e80e8"
                }}
                style={styles.ImageBackground_4_9294}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d953/e040/e2fa70fc704ed9b83a96026e4a1e80e8"
                }}
                style={styles.ImageBackground_4_9295}
              />
            </View>
            <View style={styles.View_4_9296}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43d4/5ab8/2502af11f28e94975a2f16f4cf809ac9"
                }}
                style={styles.ImageBackground_4_9297}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d953/e040/e2fa70fc704ed9b83a96026e4a1e80e8"
                }}
                style={styles.ImageBackground_4_9300}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d953/e040/e2fa70fc704ed9b83a96026e4a1e80e8"
                }}
                style={styles.ImageBackground_4_9301}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(250, 250, 250, 1)" },
  View_2: { height: hp("152%") },
  View_4_8585: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("152%"),
    minHeight: hp("152%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_8586: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("152%"),
    minHeight: hp("152%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_4_8587: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("35%")
  },
  ImageBackground_4_8588: {
    width: wp("45%"),
    height: hp("8%"),
    top: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8589: {
    width: wp("3%"),
    height: hp("10%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  View_4_8590: {
    width: wp("2%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8591: {
    width: wp("1%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8592: {
    width: wp("1%"),
    height: hp("8%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8593: {
    width: wp("1%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8595: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8596: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8598: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_8599: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8601: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_8602: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8604: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8605: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8607: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_8608: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8610: {
    width: wp("1%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8611: {
    width: wp("1%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8613: {
    width: wp("1%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8614: {
    width: wp("1%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8616: {
    width: wp("1%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8617: {
    width: wp("1%"),
    height: hp("8%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8618: {
    width: wp("1%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8620: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8621: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8623: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8624: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8626: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8627: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8629: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8630: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8632: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8633: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8635: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8636: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8638: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8639: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8641: {
    width: wp("1%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8642: {
    width: wp("1%"),
    height: hp("8%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8643: {
    width: wp("1%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8645: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_8646: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8648: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8649: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8651: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8652: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8654: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_8655: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8657: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8658: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8660: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8661: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8663: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8664: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8666: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8667: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8668: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8670: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8671: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8672: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8674: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8675: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8677: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8678: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8680: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8681: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8683: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8684: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8686: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8687: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8689: {
    width: wp("6%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_4_8690: {
    width: wp("6%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8691: {
    width: wp("6%"),
    height: hp("13%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8692: {
    width: wp("6%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8693: {
    width: wp("6%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8694: {
    width: wp("6%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8695: {
    width: wp("6%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8697: {
    width: wp("6%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8698: {
    width: wp("6%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8699: {
    width: wp("6%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8700: {
    width: wp("6%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8701: {
    width: wp("6%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8703: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8704: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8705: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8706: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8707: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8708: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8710: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8711: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8712: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8713: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8714: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8716: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_8717: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8718: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8719: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8721: {
    width: wp("22%"),
    height: hp("68%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_4_8722: {
    width: wp("16%"),
    height: hp("38%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_4_8723: {
    width: wp("16%"),
    height: hp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8724: {
    width: wp("16%"),
    height: hp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8725: {
    width: wp("16%"),
    height: hp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8726: {
    width: wp("16%"),
    height: hp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8728: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_4_8729: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8730: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8731: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8733: {
    width: wp("3%"),
    height: hp("19%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_4_8734: {
    width: wp("3%"),
    height: hp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8735: {
    width: wp("3%"),
    height: hp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8736: {
    width: wp("3%"),
    height: hp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8738: {
    width: wp("1%"),
    height: hp("16%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_4_8740: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_4_8742: {
    width: wp("11%"),
    height: hp("24%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_4_8743: {
    width: wp("11%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8744: {
    width: wp("11%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8745: {
    width: wp("11%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8746: {
    width: wp("11%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8747: {
    width: wp("11%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8748: {
    width: wp("11%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8749: {
    width: wp("11%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8751: {
    width: wp("3%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_4_8752: {
    width: wp("3%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8753: {
    width: wp("3%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8755: {
    width: wp("10%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8756: {
    width: wp("10%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8757: {
    width: wp("10%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8758: {
    width: wp("10%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8760: {
    width: wp("10%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8761: {
    width: wp("10%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8762: {
    width: wp("10%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8763: {
    width: wp("10%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8765: {
    width: wp("10%"),
    height: hp("0%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8766: {
    width: wp("10%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8767: {
    width: wp("10%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8768: {
    width: wp("10%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8770: {
    width: wp("0%"),
    height: hp("11%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_4_8771: {
    width: wp("0%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8772: {
    width: wp("0%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8773: {
    width: wp("0%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8775: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_8776: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8777: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8779: {
    width: wp("7%"),
    height: hp("9%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_4_8780: {
    width: wp("7%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8781: {
    width: wp("7%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8783: {
    width: wp("5%"),
    height: hp("11%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_4_8784: {
    width: wp("5%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8785: {
    width: wp("5%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8786: {
    width: wp("5%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8788: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_4_8789: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8790: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8791: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8793: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_4_8794: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8795: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8796: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8798: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_4_8799: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8800: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8801: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8803: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_4_8804: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8805: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8806: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8808: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8809: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8811: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_4_8812: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8813: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8815: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8816: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8817: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8819: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8820: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8821: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8823: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8824: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8825: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8827: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8828: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8829: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8831: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_8832: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8833: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8835: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_8836: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8837: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8839: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8840: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8841: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8843: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_4_8844: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8846: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8848: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_4_8849: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8851: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_4_8852: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8854: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_8855: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8857: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_4_8858: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8860: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_8862: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_4_8863: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8865: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_4_8866: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8868: {
    width: wp("15%"),
    height: hp("29%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_8869: {
    width: wp("15%"),
    height: hp("29%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8870: {
    width: wp("9%"),
    height: hp("25%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8871: {
    width: wp("9%"),
    height: hp("25%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8872: {
    width: wp("9%"),
    height: hp("25%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8874: {
    width: wp("12%"),
    height: hp("29%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_4_8875: {
    width: wp("12%"),
    height: hp("29%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8876: {
    width: wp("12%"),
    height: hp("29%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8878: {
    width: wp("5%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_4_8879: {
    width: wp("5%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8880: {
    width: wp("5%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8881: {
    width: wp("5%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8883: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_4_8884: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8885: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8886: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8888: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_8889: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8890: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8891: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8893: {
    width: wp("4%"),
    height: hp("23%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_4_8894: {
    width: wp("4%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8895: {
    width: wp("4%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8896: {
    width: wp("4%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8898: {
    width: wp("12%"),
    height: hp("11%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8899: {
    width: wp("12%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8900: {
    width: wp("12%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8902: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_4_8904: {
    width: wp("5%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_4_8905: {
    width: wp("5%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8906: {
    width: wp("5%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8908: {
    width: wp("4%"),
    height: hp("16%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8909: {
    width: wp("4%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8910: {
    width: wp("4%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8911: {
    width: wp("4%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8912: {
    width: wp("4%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8913: {
    width: wp("4%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8914: {
    width: wp("4%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8915: {
    width: wp("4%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8916: {
    width: wp("4%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8917: {
    width: wp("4%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8918: {
    width: wp("4%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8919: {
    width: wp("4%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8920: {
    width: wp("4%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8921: {
    width: wp("4%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8922: {
    width: wp("4%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8924: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8925: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8926: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8927: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8928: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8929: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8930: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8931: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8932: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8934: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8935: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8936: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8937: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8938: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8939: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8940: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8941: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8942: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8943: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8944: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8945: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8946: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8947: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8948: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8950: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8951: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8952: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8953: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8954: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8955: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8956: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8957: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8958: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8959: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8961: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_8962: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8963: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8964: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8965: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8966: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8967: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8968: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8969: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8970: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8972: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8973: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8974: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8975: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8976: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8977: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8978: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8979: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8980: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8981: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8983: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8984: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8985: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8986: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8987: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8988: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8989: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8990: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8991: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8992: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8994: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8995: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8996: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8997: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8998: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8999: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9000: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9001: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9002: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9003: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9005: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_9006: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9007: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9008: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9009: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9010: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9011: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9012: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9013: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9015: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9016: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9017: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9018: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9019: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9020: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9021: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9022: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9023: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9025: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_4_9026: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9027: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9028: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9029: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9030: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9031: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9032: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9033: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9034: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9036: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9037: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9038: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9039: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9040: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9041: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9042: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9043: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9044: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9045: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9047: {
    width: wp("4%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9048: {
    width: wp("4%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9050: {
    width: wp("6%"),
    height: hp("23%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  View_4_9051: {
    width: wp("6%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9052: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9053: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9055: {
    width: wp("2%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9056: {
    width: wp("2%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9058: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_4_9059: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9061: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_9062: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9063: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9065: {
    width: wp("1%"),
    height: hp("13%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_9066: {
    width: wp("1%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9067: {
    width: wp("1%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9069: {
    width: wp("2%"),
    height: hp("9%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_4_9070: {
    width: wp("2%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9071: {
    width: wp("2%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9073: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9074: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9076: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9077: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9079: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9080: {
    width: wp("4%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9082: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9083: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9085: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_9086: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9087: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9089: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_9090: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9091: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9093: {
    width: wp("2%"),
    height: hp("20%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_4_9094: {
    width: wp("2%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9096: {
    width: wp("1%"),
    height: hp("9%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9098: {
    width: wp("11%"),
    height: hp("29%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_9099: {
    width: wp("11%"),
    height: hp("29%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9100: {
    width: wp("11%"),
    height: hp("29%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9101: {
    width: wp("9%"),
    height: hp("19%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_4_9103: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9105: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9107: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9109: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_9111: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9112: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9114: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9115: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9117: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9118: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9120: {
    width: wp("8%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9121: {
    width: wp("8%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9123: {
    width: wp("8%"),
    height: hp("18%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_4_9124: {
    width: wp("8%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9126: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_4_9127: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9129: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9131: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9133: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9135: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9137: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9139: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9141: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9143: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9145: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9147: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9149: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9151: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9153: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9155: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9157: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9159: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9161: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9163: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9165: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9167: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9169: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9171: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9173: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9175: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9177: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9179: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9181: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9183: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9185: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9187: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9189: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9191: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9193: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9195: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9197: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9199: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9201: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9203: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_9205: {
    width: wp("33%"),
    height: hp("32%"),
    top: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_4_9206: {
    width: wp("33%"),
    height: hp("31%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9208: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_4_9210: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9212: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_4_9214: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("119%")
  },
  View_4_9215: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_9215: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_9216: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("108%")
  },
  ImageBackground_4_9217: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_9219: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%")
  },
  View_4_9220: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_9220: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_9221: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("100%")
  },
  View_4_9222: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_9222: {
    color: "rgba(96, 91, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_9223: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("100%")
  },
  View_4_9224: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_9225: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(3, 2, 41, 1)",
    borderWidth: 1
  },
  View_4_9226: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_4_9227: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_9227: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_9228: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("86%")
  },
  ImageBackground_4_9229: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_4_9231: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("7%")
  },
  View_4_9232: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9233: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9234: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9237: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("7%")
  },
  View_4_9246: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_9247: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_9247: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_9248: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("72%")
  },
  ImageBackground_4_9249: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_4_9251: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%")
  },
  View_4_9252: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_9252: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_9253: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_9254: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_9254: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_9255: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("65%")
  },
  ImageBackground_4_9256: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_4_9259: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  View_4_9260: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_9260: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_9261: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("55%")
  },
  ImageBackground_4_9262: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_9264: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_4_9265: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_9265: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_9266: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_4_9268: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("55%")
  },
  ImageBackground_4_9269: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_9271: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  View_4_9272: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_9272: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_9273: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_4_9274: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9275: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9277: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9278: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9279: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9280: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9281: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9282: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_9283: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_9284: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_9285: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("27%")
  },
  View_4_9286: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("18%")
  },
  View_4_9287: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_9287: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_9288: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_9289: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_9290: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_9291: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_9294: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%")
  },
  ImageBackground_4_9295: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("7%")
  },
  View_4_9296: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_9297: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_9300: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%")
  },
  ImageBackground_4_9301: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("7%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
