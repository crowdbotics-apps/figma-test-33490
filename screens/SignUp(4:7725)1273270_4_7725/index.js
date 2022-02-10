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
      <View style={styles.View_4_7726}>
        <View style={styles.View_4_7727}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fcb/16a8/699d841ae927ba09797cc548f8b9207e"
            }}
            style={styles.ImageBackground_4_7728}
          />
        </View>
        <View style={styles.View_4_7730}>
          <View style={styles.View_4_7731}>
            <View style={styles.View_4_7732}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10e4/6ab2/9b0cc7a0631d95bed33bc79da0d57c6a"
                }}
                style={styles.ImageBackground_4_7733}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_4_7735}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7bb/9343/faa39ab0f382c4bdb975939c66b14405"
            }}
            style={styles.ImageBackground_4_7736}
          />
          <View style={styles.View_4_7738}>
            <View style={styles.View_4_7739}>
              <View style={styles.View_4_7740}>
                <View style={styles.View_4_7741}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8511/0275/b68555abf7e88bfceca647ba23dd7b1a"
                    }}
                    style={styles.ImageBackground_4_7742}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36ea/299d/a682715b99b57089af653ba1b4a8749a"
                    }}
                    style={styles.ImageBackground_4_7744}
                  />
                </View>
                <View style={styles.View_4_7746}>
                  <View style={styles.View_4_7747}>
                    <View style={styles.View_4_7748}>
                      <View style={styles.View_4_7749}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9eac/4216/dd5705e9b85fb59b83d702cf18ec549b"
                          }}
                          style={styles.ImageBackground_4_7750}
                        />
                      </View>
                    </View>
                    <View style={styles.View_4_7752}>
                      <View style={styles.View_4_7753}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4253/e7de/d667ed09c5b7b8f1d334cbca18b15f1e"
                          }}
                          style={styles.ImageBackground_4_7754}
                        />
                      </View>
                      <View style={styles.View_4_7756}>
                        <View style={styles.View_4_7757}>
                          <View style={styles.View_4_7758}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7caa/09b2/da4f98fcf1af5edf46fd05a9b47df496"
                              }}
                              style={styles.ImageBackground_4_7759}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.View_4_7761}>
                        <View style={styles.View_4_7762}>
                          <View style={styles.View_4_7763}>
                            <View style={styles.View_4_7764}>
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbc5/38f4/37aafc70c96709a97a417d60e9c38130"
                                }}
                                style={styles.ImageBackground_4_7765}
                              />
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.View_4_7767}>
                        <View style={styles.View_4_7768}>
                          <View style={styles.View_4_7769}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b87/ac54/eacae19c158814ad200140a2179a9b4a"
                              }}
                              style={styles.ImageBackground_4_7770}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.View_4_7772}>
                        <View style={styles.View_4_7773}>
                          <View style={styles.View_4_7774}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b87/ac54/eacae19c158814ad200140a2179a9b4a"
                              }}
                              style={styles.ImageBackground_4_7775}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.View_4_7777}>
                        <View style={styles.View_4_7778}>
                          <View style={styles.View_4_7779}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b87/ac54/eacae19c158814ad200140a2179a9b4a"
                              }}
                              style={styles.ImageBackground_4_7780}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.View_4_7782}>
                        <View style={styles.View_4_7783}>
                          <View style={styles.View_4_7784}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9b87/ac54/eacae19c158814ad200140a2179a9b4a"
                              }}
                              style={styles.ImageBackground_4_7785}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.View_4_7787}>
                        <View style={styles.View_4_7788}>
                          <View style={styles.View_4_7789}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb9a/9a88/55d1e0c8a5a4d8cb5d69a94f6e76bbf3"
                              }}
                              style={styles.ImageBackground_4_7790}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.View_4_7792}>
                        <View style={styles.View_4_7793}>
                          <View style={styles.View_4_7794}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb9a/9a88/55d1e0c8a5a4d8cb5d69a94f6e76bbf3"
                              }}
                              style={styles.ImageBackground_4_7795}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_4_7797}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec12/36f4/e647b6e3c72d1be92fd402a7f06412be"
                      }}
                      style={styles.ImageBackground_4_7798}
                    />
                  </View>
                  <View style={styles.View_4_7800}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/342b/90c1/c05eb4a4e903cde791fd68b5e2bb947b"
                      }}
                      style={styles.ImageBackground_4_7801}
                    />
                  </View>
                  <View style={styles.View_4_7803}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ba1/a906/7df5aafdf8723990fcfe49bb6e1662ec"
                      }}
                      style={styles.ImageBackground_4_7804}
                    />
                  </View>
                </View>
                <View style={styles.View_4_7806}>
                  <View style={styles.View_4_7807}>
                    <View style={styles.View_4_7808}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdcc/62a1/a1e16ec9cc0315461661ff1044f1ab96"
                        }}
                        style={styles.ImageBackground_4_7809}
                      />
                    </View>
                  </View>
                  <View style={styles.View_4_7811}>
                    <View style={styles.View_4_7812}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4bee/78fc/89d6713fd4affd2d4ecb8464a15a362e"
                        }}
                        style={styles.ImageBackground_4_7813}
                      />
                    </View>
                    <View style={styles.View_4_7815}>
                      <View style={styles.View_4_7816}>
                        <View style={styles.View_4_7817}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b367/6086/59080a402512d2e71530492bd2bcc1ed"
                            }}
                            style={styles.ImageBackground_4_7818}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_4_7820}>
                      <View style={styles.View_4_7821}>
                        <View style={styles.View_4_7822}>
                          <View style={styles.View_4_7823}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4162/2590/08e53ec7f0ec6b6f849120b1f86ebaeb"
                              }}
                              style={styles.ImageBackground_4_7824}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_4_7826}>
                      <View style={styles.View_4_7827}>
                        <View style={styles.View_4_7828}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eaef/ba6e/c3658b757236946ee397acc7e52ed40c"
                            }}
                            style={styles.ImageBackground_4_7829}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_4_7831}>
                      <View style={styles.View_4_7832}>
                        <View style={styles.View_4_7833}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eaef/ba6e/c3658b757236946ee397acc7e52ed40c"
                            }}
                            style={styles.ImageBackground_4_7834}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_4_7836}>
                      <View style={styles.View_4_7837}>
                        <View style={styles.View_4_7838}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eaef/ba6e/c3658b757236946ee397acc7e52ed40c"
                            }}
                            style={styles.ImageBackground_4_7839}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_4_7841}>
                      <View style={styles.View_4_7842}>
                        <View style={styles.View_4_7843}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eaef/ba6e/c3658b757236946ee397acc7e52ed40c"
                            }}
                            style={styles.ImageBackground_4_7844}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_4_7846}>
                      <View style={styles.View_4_7847}>
                        <View style={styles.View_4_7848}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eaef/ba6e/c3658b757236946ee397acc7e52ed40c"
                            }}
                            style={styles.ImageBackground_4_7849}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_4_7851}>
                      <View style={styles.View_4_7852}>
                        <View style={styles.View_4_7853}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eaef/ba6e/c3658b757236946ee397acc7e52ed40c"
                            }}
                            style={styles.ImageBackground_4_7854}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_4_7856}>
                  <View style={styles.View_4_7857}>
                    <View style={styles.View_4_7858}>
                      <View style={styles.View_4_7859}>
                        <View style={styles.View_4_7860}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/479f/a92d/b01f346d40c3794117cd42210807cee7"
                            }}
                            style={styles.ImageBackground_4_7861}
                          />
                        </View>
                      </View>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e36f/2fe9/a0d331232b48249d299d8af319fbe90a"
                      }}
                      style={styles.ImageBackground_4_7863}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e990/1bdf/9e2cfc97831c314355771be54dbff740"
                      }}
                      style={styles.ImageBackground_4_7868}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e8d/30a6/8188c6d604b7290e621cdc774af9bc2f"
                      }}
                      style={styles.ImageBackground_4_7870}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e8d/30a6/8188c6d604b7290e621cdc774af9bc2f"
                      }}
                      style={styles.ImageBackground_4_7872}
                    />
                    <View style={styles.View_4_7874}>
                      <View style={styles.View_4_7875}>
                        <View style={styles.View_4_7876}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3801/2a05/a39df7279062f18923851a9be354bbb0"
                            }}
                            style={styles.ImageBackground_4_7877}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_4_7879}>
                      <View style={styles.View_4_7880}>
                        <View style={styles.View_4_7881}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfaa/54e1/48978fe7510be8261356fad9cb063d32"
                            }}
                            style={styles.ImageBackground_4_7882}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_4_7884}>
                      <View style={styles.View_4_7885}>
                        <View style={styles.View_4_7886}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a267/3126/26dba29337e6f437fca58dda69e071d8"
                            }}
                            style={styles.ImageBackground_4_7887}
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_4_7889}>
                    <View style={styles.View_4_7890}>
                      <View style={styles.View_4_7891}>
                        <View style={styles.View_4_7892}>
                          <View style={styles.View_4_7893}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/065b/c5b4/df0496a9dc3cec08ff171059fe73a888"
                              }}
                              style={styles.ImageBackground_4_7894}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_4_7896}>
                      <View style={styles.View_4_7897}>
                        <View style={styles.View_4_7898}>
                          <View style={styles.View_4_7899}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8e7/9446/c6a0c01132296d3e24a12942928a49db"
                              }}
                              style={styles.ImageBackground_4_7900}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.View_4_7902}>
                        <View style={styles.View_4_7903}>
                          <View style={styles.View_4_7904}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1357/44e1/bc51a0feb694407114372ac9bf85c7a4"
                              }}
                              style={styles.ImageBackground_4_7905}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_4_7907}>
                      <View style={styles.View_4_7908}>
                        <View style={styles.View_4_7909}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06f1/2417/ab3046fe1e019ca8008a3b19bba46e92"
                            }}
                            style={styles.ImageBackground_4_7910}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_4_7912}>
                      <View style={styles.View_4_7913}>
                        <View style={styles.View_4_7914}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aff1/5f83/94ff4a8e39a35713911ee256079dfd68"
                            }}
                            style={styles.ImageBackground_4_7915}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_4_7917}>
                      <View style={styles.View_4_7918}>
                        <View style={styles.View_4_7919}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/693d/ab1e/c02952285d26070eeca71579388bbb48"
                            }}
                            style={styles.ImageBackground_4_7920}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_4_7922}>
                      <View style={styles.View_4_7923}>
                        <View style={styles.View_4_7924}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c97c/8e76/45f97eea8a77da388afb36411d35f914"
                            }}
                            style={styles.ImageBackground_4_7925}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_4_7927}>
                      <View style={styles.View_4_7928}>
                        <View style={styles.View_4_7929}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4a5/e399/044981ccfba43487a93bdb68232ec10f"
                            }}
                            style={styles.ImageBackground_4_7930}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_4_7932}>
                      <View style={styles.View_4_7933}>
                        <View style={styles.View_4_7934}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49b6/ca8b/fdcb53eb0274636ac3024ff3ee3f49b0"
                            }}
                            style={styles.ImageBackground_4_7935}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_4_7937}>
                      <View style={styles.View_4_7938}>
                        <View style={styles.View_4_7939}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/be87/72d8/6db07a98e767be50610a17364844975f"
                            }}
                            style={styles.ImageBackground_4_7940}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_4_7942}>
                      <View style={styles.View_4_7943}>
                        <View style={styles.View_4_7944}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4618/6dc0/11cc5f76c152c591e53b8153322723ed"
                            }}
                            style={styles.ImageBackground_4_7945}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_4_7947}>
                      <View style={styles.View_4_7948}>
                        <View style={styles.View_4_7949}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4618/6dc0/11cc5f76c152c591e53b8153322723ed"
                            }}
                            style={styles.ImageBackground_4_7950}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_4_7952}>
                      <View style={styles.View_4_7953}>
                        <View style={styles.View_4_7954}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6fe/995a/746cdc6a61d563acb6096e0a798db60c"
                            }}
                            style={styles.ImageBackground_4_7955}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_4_7957}>
                      <View style={styles.View_4_7958}>
                        <View style={styles.View_4_7959}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6057/6558/204c12c4de1754c0e33c777bfe38b7ea"
                            }}
                            style={styles.ImageBackground_4_7960}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_4_7962}>
                      <View style={styles.View_4_7963}>
                        <View style={styles.View_4_7964}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e23e/7c57/596f54e400f6dcf703696f94c3852f42"
                            }}
                            style={styles.ImageBackground_4_7965}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_4_7967}>
                      <View style={styles.View_4_7968}>
                        <View style={styles.View_4_7969}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77cd/170b/d54a6072f199f6f01e81abbbc5357aa6"
                            }}
                            style={styles.ImageBackground_4_7970}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_4_7972}>
                      <View style={styles.View_4_7973}>
                        <View style={styles.View_4_7974}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5c7/09bd/20a4e8e8f8f751342c9240f74b7c08d3"
                            }}
                            style={styles.ImageBackground_4_7975}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_4_7977}>
                      <View style={styles.View_4_7978}>
                        <View style={styles.View_4_7979}>
                          <View style={styles.View_4_7980}>
                            <View style={styles.View_4_7981}>
                              <ImageBackground
                                source={{
                                  uri:
                                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ea1/147d/ce94958681834abc504bc68bcaf5ff18"
                                }}
                                style={styles.ImageBackground_4_7982}
                              />
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.View_4_7984}>
                        <View style={styles.View_4_7985}>
                          <View style={styles.View_4_7986}>
                            <View style={styles.View_4_7987}>
                              <View style={styles.View_4_7988}>
                                <ImageBackground
                                  source={{
                                    uri:
                                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6e5/fbcc/94a9b814b39ec1cb8bde3c59dc06fc75"
                                  }}
                                  style={styles.ImageBackground_4_7989}
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                        <View style={styles.View_4_7991}>
                          <View style={styles.View_4_7992}>
                            <View style={styles.View_4_7993}>
                              <View style={styles.View_4_7994}>
                                <ImageBackground
                                  source={{
                                    uri:
                                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4c3/f325/01ff8a0a5981c551f730806b5bf97707"
                                  }}
                                  style={styles.ImageBackground_4_7995}
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                        <View style={styles.View_4_7997}>
                          <View style={styles.View_4_7998}>
                            <View style={styles.View_4_7999}>
                              <View style={styles.View_4_8000}>
                                <ImageBackground
                                  source={{
                                    uri:
                                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/942d/ea67/a3376de17e00ce65434fd695f938ae4c"
                                  }}
                                  style={styles.ImageBackground_4_8001}
                                />
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_4_8003}>
                      <View style={styles.View_4_8004}>
                        <View style={styles.View_4_8005}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83c0/5c0c/26a9383d3429408a8375daa325932f26"
                            }}
                            style={styles.ImageBackground_4_8006}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.View_4_8008}>
                      <View style={styles.View_4_8009}>
                        <View style={styles.View_4_8010}>
                          <View style={styles.View_4_8011}>
                            <ImageBackground
                              source={{
                                uri:
                                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/faba/9d79/058c954bd743475bd4ea4edbc72cf619"
                              }}
                              style={styles.ImageBackground_4_8012}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c715/83db/125066796aba040136f1e04f00f346ce"
                    }}
                    style={styles.ImageBackground_4_8014}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d1d/8473/36639373a6d47cd3ca004e58610ba091"
                    }}
                    style={styles.ImageBackground_4_8016}
                  />
                </View>
                <View style={styles.View_4_8018}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7034/922f/4172e2ea3a211baa0f041820274bb5a6"
                    }}
                    style={styles.ImageBackground_4_8019}
                  />
                </View>
                <View style={styles.View_4_8021}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e11/26ff/a81d1f74eda128d3eee3f590b7513731"
                    }}
                    style={styles.ImageBackground_4_8022}
                  />
                </View>
                <View style={styles.View_4_8024}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e001/c1cb/b4075cc3db689785deb293867cfeaed5"
                    }}
                    style={styles.ImageBackground_4_8025}
                  />
                </View>
                <View style={styles.View_4_8027}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcc2/5955/597fa5643cf29ad913ac9b2e50a3fa64"
                    }}
                    style={styles.ImageBackground_4_8028}
                  />
                  <View style={styles.View_4_8030}>
                    <View style={styles.View_4_8031}>
                      <View style={styles.View_4_8032}>
                        <View style={styles.View_4_8033}>
                          <View style={styles.View_4_8034}>
                            <View style={styles.View_4_8035}>
                              <View style={styles.View_4_8036}>
                                <View style={styles.View_4_8037}>
                                  <View style={styles.View_4_8038}>
                                    <View style={styles.View_4_8039}>
                                      <View style={styles.View_4_8040}>
                                        <View style={styles.View_4_8041}>
                                          <View style={styles.View_4_8042}>
                                            <ImageBackground
                                              source={{
                                                uri:
                                                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/191e/f32a/35c06a83bc6f2df4684750e2546db48a"
                                              }}
                                              style={
                                                styles.ImageBackground_4_8043
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
                    <View style={styles.View_4_8045}>
                      <View style={styles.View_4_8046}>
                        <View style={styles.View_4_8047}>
                          <View style={styles.View_4_8048}>
                            <View style={styles.View_4_8049}>
                              <View style={styles.View_4_8050}>
                                <View style={styles.View_4_8051}>
                                  <View style={styles.View_4_8052}>
                                    <View style={styles.View_4_8053}>
                                      <View style={styles.View_4_8054}>
                                        <View style={styles.View_4_8055}>
                                          <View style={styles.View_4_8056}>
                                            <ImageBackground
                                              source={{
                                                uri:
                                                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9124/7ce2/014f1d77e12da9ec56604e6b60a717bf"
                                              }}
                                              style={
                                                styles.ImageBackground_4_8057
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
                    <View style={styles.View_4_8059}>
                      <View style={styles.View_4_8060}>
                        <View style={styles.View_4_8061}>
                          <View style={styles.View_4_8062}>
                            <View style={styles.View_4_8063}>
                              <View style={styles.View_4_8064}>
                                <View style={styles.View_4_8065}>
                                  <View style={styles.View_4_8066}>
                                    <View style={styles.View_4_8067}>
                                      <View style={styles.View_4_8068}>
                                        <View style={styles.View_4_8069}>
                                          <View style={styles.View_4_8070}>
                                            <ImageBackground
                                              source={{
                                                uri:
                                                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e28/03c9/d7e992b8af5f8375d912525a2aaf4a1b"
                                              }}
                                              style={
                                                styles.ImageBackground_4_8071
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
                  </View>
                  <View style={styles.View_4_8073}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebf7/7b4c/2c4fa1245bc044650cbc3b15c9abae44"
                      }}
                      style={styles.ImageBackground_4_8074}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b86/a0c5/a770aecd4542b8712480c1d4f222ef4c"
                      }}
                      style={styles.ImageBackground_4_8076}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4486/d27b/564dd3c96b7540e2a7f1c7afaadf62ad"
                    }}
                    style={styles.ImageBackground_4_8078}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1484/c1ad/f76bcc06d6eb658549cdcc961fde8731"
                    }}
                    style={styles.ImageBackground_4_8080}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8d8/2211/7c406b4505c7a2311917af3225822a4c"
                    }}
                    style={styles.ImageBackground_4_8082}
                  />
                </View>
              </View>
              <View style={styles.View_4_8084}>
                <View style={styles.View_4_8085}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99ca/c5a6/9baec8e78fcba53ae8de1c1643b63a07"
                    }}
                    style={styles.ImageBackground_4_8086}
                  />
                </View>
                <View style={styles.View_4_8088}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bfec/b456/a9163e8c5736ec90cd5979a72d8a92bf"
                    }}
                    style={styles.ImageBackground_4_8089}
                  />
                </View>
                <View style={styles.View_4_8091}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e51/e982/93678f1cea8ba0ad0e372364c67193c8"
                    }}
                    style={styles.ImageBackground_4_8092}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_4_8094}>
              <View style={styles.View_4_8095}>
                <View style={styles.View_4_8096}>
                  <View style={styles.View_4_8097}>
                    <View style={styles.View_4_8098}>
                      <View style={styles.View_4_8099}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7794/adca/7ccdbea975e5adaed8a6b6ef06420cc7"
                          }}
                          style={styles.ImageBackground_4_8100}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_4_8102}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b85/803a/5668eb6b09c8f72d622169998b77bc9b"
                      }}
                      style={styles.ImageBackground_4_8103}
                    />
                  </View>
                  <View style={styles.View_4_8105}>
                    <View style={styles.View_4_8106}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb4b/d6cd/794ab6cc018a23f52701f415e14458bc"
                        }}
                        style={styles.ImageBackground_4_8107}
                      />
                    </View>
                  </View>
                  <View style={styles.View_4_8109}>
                    <View style={styles.View_4_8110}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2efe/d7a3/54ddca3fc56df1c1f8413be1b991e097"
                        }}
                        style={styles.ImageBackground_4_8111}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_4_8113}>
                <View style={styles.View_4_8114}>
                  <View style={styles.View_4_8115}>
                    <View style={styles.View_4_8116}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ada6/08c0/d776e1971b5b282513392e8e7ff268f5"
                        }}
                        style={styles.ImageBackground_4_8117}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6100/7ae7/1b225bfccd930941859dde47294aaafc"
                        }}
                        style={styles.ImageBackground_4_8119}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17ca/7896/efba090fa349629bd419317fb7de7091"
                        }}
                        style={styles.ImageBackground_4_8121}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5811/c7d1/35a1cb70670f0f8a9716d3f99f9a69b2"
                        }}
                        style={styles.ImageBackground_4_8123}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbe5/18e4/6ad5dfbcfda4a6aad447ce791ff99232"
                        }}
                        style={styles.ImageBackground_4_8125}
                      />
                    </View>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7437/0122/217ac154ce5c7b17fd2e66f0244047eb"
                  }}
                  style={styles.ImageBackground_4_8127}
                />
              </View>
            </View>
            <View style={styles.View_4_8129}>
              <View style={styles.View_4_8130}>
                <View style={styles.View_4_8131}>
                  <View style={styles.View_4_8132}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0716/804a/1cc1c726615c869375ffbc2c250e8ae6"
                      }}
                      style={styles.ImageBackground_4_8133}
                    />
                  </View>
                  <View style={styles.View_4_8135}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19da/f75b/47c747d075792a585d40c3e6ab9974f8"
                      }}
                      style={styles.ImageBackground_4_8136}
                    />
                  </View>
                  <View style={styles.View_4_8138}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d743/5ff4/08e28de719c16c7e5f7140b9a94a76cf"
                      }}
                      style={styles.ImageBackground_4_8139}
                    />
                  </View>
                  <View style={styles.View_4_8141}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c45/f534/2b1d4a20281be1780fa0a43cdf3a0eb4"
                      }}
                      style={styles.ImageBackground_4_8142}
                    />
                  </View>
                  <View style={styles.View_4_8144}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/806e/913c/2ab119dcb0ac0c7852a46c6b3219c097"
                      }}
                      style={styles.ImageBackground_4_8145}
                    />
                  </View>
                  <View style={styles.View_4_8147}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0566/4c5a/bef823219070a817eeb021412777e8d2"
                      }}
                      style={styles.ImageBackground_4_8148}
                    />
                  </View>
                  <View style={styles.View_4_8150}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3831/e6a9/331f23b211195716a67feb67b34c7c9d"
                      }}
                      style={styles.ImageBackground_4_8151}
                    />
                  </View>
                  <View style={styles.View_4_8153}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3831/e6a9/331f23b211195716a67feb67b34c7c9d"
                      }}
                      style={styles.ImageBackground_4_8154}
                    />
                  </View>
                </View>
                <View style={styles.View_4_8156}>
                  <View style={styles.View_4_8157}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a8c/35d0/143cc0d8e6360d1675613cc8a2c2837f"
                      }}
                      style={styles.ImageBackground_4_8158}
                    />
                  </View>
                  <View style={styles.View_4_8160}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8514/b761/1d0ca9ae888bcc18256ffb630eab1757"
                      }}
                      style={styles.ImageBackground_4_8161}
                    />
                  </View>
                  <View style={styles.View_4_8163}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ea0/25e9/42107116b50f8c655bb2d0bd67585fd0"
                      }}
                      style={styles.ImageBackground_4_8164}
                    />
                  </View>
                  <View style={styles.View_4_8166}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a785/9fc4/dabcdab25f3fd43d0ff895c7b43826c2"
                      }}
                      style={styles.ImageBackground_4_8167}
                    />
                  </View>
                  <View style={styles.View_4_8169}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/554a/8192/076d80d6067d9c8d5ec316923812bcdc"
                      }}
                      style={styles.ImageBackground_4_8170}
                    />
                  </View>
                  <View style={styles.View_4_8172}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66ae/3ad4/8a23ff03f4538338da45a8d42ef98a21"
                      }}
                      style={styles.ImageBackground_4_8173}
                    />
                  </View>
                  <View style={styles.View_4_8175}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d674/681a/f1aba7069c6fe9dd2448ff0853a72f90"
                      }}
                      style={styles.ImageBackground_4_8176}
                    />
                  </View>
                  <View style={styles.View_4_8178}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d674/681a/f1aba7069c6fe9dd2448ff0853a72f90"
                      }}
                      style={styles.ImageBackground_4_8179}
                    />
                  </View>
                </View>
                <View style={styles.View_4_8181}>
                  <View style={styles.View_4_8182}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcb6/9698/1fda3b896f011e7c2cd508cfbe7b448b"
                      }}
                      style={styles.ImageBackground_4_8183}
                    />
                  </View>
                  <View style={styles.View_4_8185}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e30/92db/8b72d3a8be2724374599ad157b6df590"
                      }}
                      style={styles.ImageBackground_4_8186}
                    />
                  </View>
                  <View style={styles.View_4_8188}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98c5/de13/f1d14ca5d13e2efc17ea301c9a991a6f"
                      }}
                      style={styles.ImageBackground_4_8189}
                    />
                  </View>
                  <View style={styles.View_4_8191}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ea3/d804/cf2b637d0d064b5bd0235f6a6a7c6090"
                      }}
                      style={styles.ImageBackground_4_8192}
                    />
                  </View>
                  <View style={styles.View_4_8194}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd33/30fa/caf18bf1a57c82409137f796f42669cf"
                      }}
                      style={styles.ImageBackground_4_8195}
                    />
                  </View>
                  <View style={styles.View_4_8197}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/72d8/2985/f05e322aebe4fe83e1da84c69a1e9fa7"
                      }}
                      style={styles.ImageBackground_4_8198}
                    />
                  </View>
                  <View style={styles.View_4_8200}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0ff/9f7c/0abeee95c8528718356b3fdfbf651259"
                      }}
                      style={styles.ImageBackground_4_8201}
                    />
                  </View>
                  <View style={styles.View_4_8203}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/61e7/4428/e7535df7266adb8c62736b8906c647da"
                      }}
                      style={styles.ImageBackground_4_8204}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_4_8206}>
                <View style={styles.View_4_8207}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/440b/d6c0/66bcf8eb7b58a5c5d830474b5748b818"
                    }}
                    style={styles.ImageBackground_4_8208}
                  />
                </View>
                <View style={styles.View_4_8210}>
                  <View style={styles.View_4_8211}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66ec/5bab/6f15fdac3a2041f356d3a941b316158f"
                      }}
                      style={styles.ImageBackground_4_8212}
                    />
                  </View>
                  <View style={styles.View_4_8214}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d546/2fd9/9466cf90e14748a8bfc41def8b65cf3c"
                      }}
                      style={styles.ImageBackground_4_8215}
                    />
                  </View>
                  <View style={styles.View_4_8217}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99cd/c0f1/df0fed1a50620930ec82f73560c3b99b"
                      }}
                      style={styles.ImageBackground_4_8218}
                    />
                  </View>
                  <View style={styles.View_4_8220}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a2a5/8f80/e9ef823b7c58f0efdde502f0e2135007"
                      }}
                      style={styles.ImageBackground_4_8221}
                    />
                  </View>
                  <View style={styles.View_4_8223}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35f9/f896/1e4cf8dd4fdf011ad2e9737f870c069b"
                      }}
                      style={styles.ImageBackground_4_8224}
                    />
                  </View>
                  <View style={styles.View_4_8226}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3768/bc26/894b04f7d9f9d48c104188d21fbb55ce"
                      }}
                      style={styles.ImageBackground_4_8227}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_4_8229}>
              <View style={styles.View_4_8230}>
                <View style={styles.View_4_8231}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f06b/8894/5fbfa8f40778ea6e4e1120996b870e82"
                    }}
                    style={styles.ImageBackground_4_8232}
                  />
                </View>
                <View style={styles.View_4_8234}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f312/dcec/e820096ad7580ceb1e38f03b58ef28a1"
                    }}
                    style={styles.ImageBackground_4_8235}
                  />
                </View>
                <View style={styles.View_4_8237}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f9e/ba08/e3d2eac511c1930c9fe2ec1a7681b3ce"
                    }}
                    style={styles.ImageBackground_4_8238}
                  />
                </View>
              </View>
              <View style={styles.View_4_8240}>
                <View style={styles.View_4_8241}>
                  <View style={styles.View_4_8242}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/267b/8ebb/2786289eeb3f1a94617fd34494601197"
                      }}
                      style={styles.ImageBackground_4_8243}
                    />
                  </View>
                </View>
                <View style={styles.View_4_8245}>
                  <View style={styles.View_4_8246}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df24/3c35/16055e7a36d03b4a3c11a8a4d9ac6bfc"
                      }}
                      style={styles.ImageBackground_4_8247}
                    />
                  </View>
                </View>
                <View style={styles.View_4_8249}>
                  <View style={styles.View_4_8250}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ed7a/edb2/74069673213bd25950198480304759e4"
                      }}
                      style={styles.ImageBackground_4_8251}
                    />
                  </View>
                </View>
                <View style={styles.View_4_8253}>
                  <View style={styles.View_4_8254}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b073/2e14/aa1d96b6dfec12df4531d5ff42769276"
                      }}
                      style={styles.ImageBackground_4_8255}
                    />
                  </View>
                </View>
                <View style={styles.View_4_8257}>
                  <View style={styles.View_4_8258}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0202/ae1f/f2b3bc539fd6134920ad892330292c3d"
                      }}
                      style={styles.ImageBackground_4_8259}
                    />
                  </View>
                </View>
                <View style={styles.View_4_8261}>
                  <View style={styles.View_4_8262}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd6d/4b21/ef31b0f83ff26356a81870e1e4205aac"
                      }}
                      style={styles.ImageBackground_4_8263}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_4_8265}>
          <View style={styles.View_4_8266}>
            <View style={styles.View_4_8267}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26e7/d3a4/313388dc28cd5239b6edd0a1f21d69b4"
                }}
                style={styles.ImageBackground_4_8268}
              />
            </View>
            <View style={styles.View_4_8270}>
              <View style={styles.View_4_8271}>
                <View style={styles.View_4_8272}>
                  <View style={styles.View_4_8273}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f5c5/ab33/47da6529ab68789ca5e007dcae6472ef"
                      }}
                      style={styles.ImageBackground_4_8274}
                    />
                  </View>
                </View>
                <View style={styles.View_4_8276}>
                  <View style={styles.View_4_8277}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f02e/efa3/ff7521df6fe9dacaa3e2b69cfb2bd2ac"
                      }}
                      style={styles.ImageBackground_4_8278}
                    />
                  </View>
                </View>
                <View style={styles.View_4_8280}>
                  <View style={styles.View_4_8281}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bca6/8fef/c8c61a6266bd8a57305579f6a3a28a8a"
                      }}
                      style={styles.ImageBackground_4_8282}
                    />
                  </View>
                </View>
                <View style={styles.View_4_8284}>
                  <View style={styles.View_4_8285}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b375/a341/ccb69b9e0edaf3a4c3b823df955973c6"
                      }}
                      style={styles.ImageBackground_4_8286}
                    />
                  </View>
                </View>
                <View style={styles.View_4_8288}>
                  <View style={styles.View_4_8289}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92ea/661d/98b2b4fc7f4e9125b763d5780e6b6f7b"
                      }}
                      style={styles.ImageBackground_4_8290}
                    />
                  </View>
                </View>
                <View style={styles.View_4_8292}>
                  <View style={styles.View_4_8293}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c43/cb28/e67cd432e82e451b0c142053c1c855ef"
                      }}
                      style={styles.ImageBackground_4_8294}
                    />
                  </View>
                </View>
                <View style={styles.View_4_8296}>
                  <View style={styles.View_4_8297}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92ea/661d/98b2b4fc7f4e9125b763d5780e6b6f7b"
                      }}
                      style={styles.ImageBackground_4_8298}
                    />
                  </View>
                </View>
                <View style={styles.View_4_8300}>
                  <View style={styles.View_4_8301}>
                    <View style={styles.View_4_8302}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09d3/8556/8f7df3a3738557e0e7364a9245592eb7"
                        }}
                        style={styles.ImageBackground_4_8303}
                      />
                    </View>
                  </View>
                  <View style={styles.View_4_8305}>
                    <View style={styles.View_4_8306}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2e2/9020/0fd9f3b40d136c0c79d43c72a30065e8"
                        }}
                        style={styles.ImageBackground_4_8307}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_4_8309}>
              <View style={styles.View_4_8310}>
                <View style={styles.View_4_8311}>
                  <View style={styles.View_4_8312}>
                    <View style={styles.View_4_8313}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47d9/328f/211f4687889f3e4cba7b65b26fd0f124"
                        }}
                        style={styles.ImageBackground_4_8314}
                      />
                    </View>
                    <View style={styles.View_4_8316}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edd0/94c3/d94d7472bac5eedb30fbd08fda0b7633"
                        }}
                        style={styles.ImageBackground_4_8317}
                      />
                    </View>
                  </View>
                  <View style={styles.View_4_8319}>
                    <View style={styles.View_4_8320}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48f8/9997/8bade1567231a2f09b5cbb577dc16881"
                        }}
                        style={styles.ImageBackground_4_8321}
                      />
                    </View>
                    <View style={styles.View_4_8323}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9368/9372/4d759bf3eab191123c40316d83e80c5d"
                        }}
                        style={styles.ImageBackground_4_8324}
                      />
                    </View>
                  </View>
                  <View style={styles.View_4_8326}>
                    <View style={styles.View_4_8327}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e8b/66b2/dd04a7342b535baa58181f11df9f5f00"
                        }}
                        style={styles.ImageBackground_4_8328}
                      />
                    </View>
                    <View style={styles.View_4_8330}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ef7/76b2/71697933d2565959b66b8eac5cc16b16"
                        }}
                        style={styles.ImageBackground_4_8331}
                      />
                    </View>
                  </View>
                  <View style={styles.View_4_8333}>
                    <View style={styles.View_4_8334}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3577/8213/6186e145076c158af094e67838ef723b"
                        }}
                        style={styles.ImageBackground_4_8335}
                      />
                    </View>
                    <View style={styles.View_4_8337}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85bb/1c3a/7fb619ebec14f123cd7dcd35d74bae8b"
                        }}
                        style={styles.ImageBackground_4_8338}
                      />
                    </View>
                  </View>
                  <View style={styles.View_4_8340}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6da5/1263/26606f6593a6df46e0b6b08f3128c28d"
                      }}
                      style={styles.ImageBackground_4_8341}
                    />
                  </View>
                  <View style={styles.View_4_8343}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/919f/bb24/a375bfd2f648e59854fbf21a0f8e4e35"
                      }}
                      style={styles.ImageBackground_4_8344}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_4_8346}>
            <View style={styles.View_4_8347}>
              <View style={styles.View_4_8348}>
                <View style={styles.View_4_8349}>
                  <View style={styles.View_4_8350}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c24/010c/c646f054c8089b66cdf44e330affc04d"
                      }}
                      style={styles.ImageBackground_4_8351}
                    />
                  </View>
                </View>
                <View style={styles.View_4_8353}>
                  <View style={styles.View_4_8354}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fe3/4a12/f7a150016d30f43093cb6975f8d5fe79"
                      }}
                      style={styles.ImageBackground_4_8355}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_4_8357}>
                <View style={styles.View_4_8358}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fdd/d30d/f74281b1539af0cd9c96ca4c17dc23e3"
                    }}
                    style={styles.ImageBackground_4_8359}
                  />
                </View>
                <View style={styles.View_4_8361}>
                  <View style={styles.View_4_8362}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ab7/ac49/e0aced54e27322b74b1bb060fbfabf91"
                      }}
                      style={styles.ImageBackground_4_8363}
                    />
                  </View>
                </View>
                <View style={styles.View_4_8365}>
                  <View style={styles.View_4_8366}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b16/15df/caa30238ab6ce9e31b57bde85ba88129"
                      }}
                      style={styles.ImageBackground_4_8367}
                    />
                  </View>
                </View>
                <View style={styles.View_4_8369}>
                  <View style={styles.View_4_8370}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce7b/0b67/26e5cd33e05a2fe05bfdc5a3bd4b6cd3"
                      }}
                      style={styles.ImageBackground_4_8371}
                    />
                  </View>
                </View>
                <View style={styles.View_4_8373}>
                  <View style={styles.View_4_8374}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1356/7f3e/afe6ec0ed64e8e554ed62a9a33a6d1f0"
                      }}
                      style={styles.ImageBackground_4_8375}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_4_8377}>
                <View style={styles.View_4_8378}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e35/f7cb/54548c199d188f0f1f3e238b1da397da"
                    }}
                    style={styles.ImageBackground_4_8379}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_4_8381}>
              <View style={styles.View_4_8382}>
                <View style={styles.View_4_8383}>
                  <View style={styles.View_4_8384}>
                    <View style={styles.View_4_8385}>
                      <View style={styles.View_4_8386}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b27/b2e8/7ed9d8b6c383600c376ae19a377a09d6"
                          }}
                          style={styles.ImageBackground_4_8387}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_4_8389}>
                  <View style={styles.View_4_8390}>
                    <View style={styles.View_4_8391}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98ca/cef5/3b67cc1072f334a55b7e348701ba7fb0"
                        }}
                        style={styles.ImageBackground_4_8392}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_4_8394}>
                  <View style={styles.View_4_8395}>
                    <View style={styles.View_4_8396}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ac8/883f/68b3aba296e10be9db8bed6e8aa96462"
                        }}
                        style={styles.ImageBackground_4_8397}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_4_8399}>
                  <View style={styles.View_4_8400}>
                    <View style={styles.View_4_8401}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ac8/883f/68b3aba296e10be9db8bed6e8aa96462"
                        }}
                        style={styles.ImageBackground_4_8402}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_4_8404}>
                <View style={styles.View_4_8405}>
                  <View style={styles.View_4_8406}>
                    <View style={styles.View_4_8407}>
                      <View style={styles.View_4_8408}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f66/9295/cf158bfa38c305e9ad4132088909e213"
                          }}
                          style={styles.ImageBackground_4_8409}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_4_8411}>
                  <View style={styles.View_4_8412}>
                    <View style={styles.View_4_8413}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98ca/cef5/3b67cc1072f334a55b7e348701ba7fb0"
                        }}
                        style={styles.ImageBackground_4_8414}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_4_8416}>
                  <View style={styles.View_4_8417}>
                    <View style={styles.View_4_8418}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ac8/883f/68b3aba296e10be9db8bed6e8aa96462"
                        }}
                        style={styles.ImageBackground_4_8419}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_4_8421}>
                  <View style={styles.View_4_8422}>
                    <View style={styles.View_4_8423}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ac8/883f/68b3aba296e10be9db8bed6e8aa96462"
                        }}
                        style={styles.ImageBackground_4_8424}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_4_8426}>
                <View style={styles.View_4_8427}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6de7/5e27/20de8a8854d00db2d3c0363fca75ec7f"
                    }}
                    style={styles.ImageBackground_4_8428}
                  />
                </View>
                <View style={styles.View_4_8430}>
                  <View style={styles.View_4_8431}>
                    <View style={styles.View_4_8432}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98ca/cef5/3b67cc1072f334a55b7e348701ba7fb0"
                        }}
                        style={styles.ImageBackground_4_8433}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_4_8435}>
                  <View style={styles.View_4_8436}>
                    <View style={styles.View_4_8437}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ac8/883f/68b3aba296e10be9db8bed6e8aa96462"
                        }}
                        style={styles.ImageBackground_4_8438}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_4_8440}>
                  <View style={styles.View_4_8441}>
                    <View style={styles.View_4_8442}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ac8/883f/68b3aba296e10be9db8bed6e8aa96462"
                        }}
                        style={styles.ImageBackground_4_8443}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_4_8445}>
              <View style={styles.View_4_8446}>
                <View style={styles.View_4_8447}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da4e/62c5/6390d4f9ba7ad28a260670a8d239d366"
                    }}
                    style={styles.ImageBackground_4_8448}
                  />
                </View>
              </View>
              <View style={styles.View_4_8450}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fd0/cf90/a052d62d9ea4638b972fd073afa560fb"
                  }}
                  style={styles.ImageBackground_4_8451}
                />
              </View>
              <View style={styles.View_4_8453}>
                <View style={styles.View_4_8454}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6c7/d8b4/d36f07b6747bdd603e8bba70e4277d74"
                    }}
                    style={styles.ImageBackground_4_8455}
                  />
                </View>
              </View>
              <View style={styles.View_4_8457}>
                <View style={styles.View_4_8458}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d9a1/7303/7d5969957553923f389ad92d7aad242e"
                    }}
                    style={styles.ImageBackground_4_8459}
                  />
                </View>
              </View>
              <View style={styles.View_4_8461}>
                <View style={styles.View_4_8462}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e1c/dfc3/950536aab9ea2f28c5b04e3fe58e298f"
                    }}
                    style={styles.ImageBackground_4_8463}
                  />
                </View>
              </View>
              <View style={styles.View_4_8465}>
                <View style={styles.View_4_8466}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5387/8a2e/ee1811a7edaaf0a2196a8c2794bea998"
                    }}
                    style={styles.ImageBackground_4_8467}
                  />
                </View>
              </View>
              <View style={styles.View_4_8469}>
                <View style={styles.View_4_8470}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34a0/85c4/2bfa5a988b1817b67dadcf8a298a86f7"
                    }}
                    style={styles.ImageBackground_4_8471}
                  />
                </View>
              </View>
              <View style={styles.View_4_8473}>
                <View style={styles.View_4_8474}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5387/8a2e/ee1811a7edaaf0a2196a8c2794bea998"
                    }}
                    style={styles.ImageBackground_4_8475}
                  />
                </View>
              </View>
              <View style={styles.View_4_8477}>
                <View style={styles.View_4_8478}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f720/22f4/de3117b06ba246dabef18ee79a9f8175"
                    }}
                    style={styles.ImageBackground_4_8479}
                  />
                </View>
              </View>
              <View style={styles.View_4_8481}>
                <View style={styles.View_4_8482}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5387/8a2e/ee1811a7edaaf0a2196a8c2794bea998"
                    }}
                    style={styles.ImageBackground_4_8483}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_4_8485}>
        <View style={styles.View_4_8486}>
          <View style={styles.View_4_8487} />
        </View>
        <View style={styles.View_4_8488}>
          <View style={styles.View_4_8489}>
            <Text style={styles.Text_4_8489}>
              Already have an account? Log in
            </Text>
          </View>
        </View>
        <View style={styles.View_4_8490}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1323/10ec/35be7578f6f263651ee896489625b7bb"
            }}
            style={styles.ImageBackground_4_8491}
          />
          <View style={styles.View_4_8492}>
            <Text style={styles.Text_4_8492}>Create account</Text>
          </View>
        </View>
        <View style={styles.View_4_8493}>
          <View style={styles.View_4_8494}>
            <View style={styles.View_4_8495} />
          </View>
          <View style={styles.View_4_8496}>
            <View style={styles.View_4_8497}>
              <Text style={styles.Text_4_8497}>
                By creating an account you agree to the terms of use and our
                privacy policy.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_4_8498}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc62/0823/b7fd79c43e11405ec2480b61204b2e34"
            }}
            style={styles.ImageBackground_4_8499}
          />
          <View style={styles.View_4_8501}>
            <View style={styles.View_4_8502}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5b5/54b6/50755ba8fdcfe921f3cb96ffd129d957"
                }}
                style={styles.ImageBackground_4_8503}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f3a/ddb7/dae68e870d39fc5ecec600c310192f72"
                }}
                style={styles.ImageBackground_4_8504}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28b5/f21a/a2da0a4c0e3f187ba5e279eea5ae5f71"
            }}
            style={styles.ImageBackground_4_8507}
          />
          <View style={styles.View_4_8516}>
            <View style={styles.View_4_8517}>
              <Text style={styles.Text_4_8517}>Password</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_4_8518}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc62/0823/b7fd79c43e11405ec2480b61204b2e34"
            }}
            style={styles.ImageBackground_4_8519}
          />
          <View style={styles.View_4_8521}>
            <View style={styles.View_4_8522}>
              <Text style={styles.Text_4_8522}>johnkevine4362</Text>
            </View>
          </View>
          <View style={styles.View_4_8523}>
            <View style={styles.View_4_8524}>
              <Text style={styles.Text_4_8524}>Username</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_4_8525}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc62/0823/b7fd79c43e11405ec2480b61204b2e34"
            }}
            style={styles.ImageBackground_4_8526}
          />
          <View style={styles.View_4_8528}>
            <View style={styles.View_4_8529}>
              <Text style={styles.Text_4_8529}>example@gmail.com</Text>
            </View>
          </View>
          <View style={styles.View_4_8530}>
            <View style={styles.View_4_8531}>
              <Text style={styles.Text_4_8531}>Email Address</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_4_8532}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc62/0823/b7fd79c43e11405ec2480b61204b2e34"
            }}
            style={styles.ImageBackground_4_8533}
          />
          <View style={styles.View_4_8535}>
            <View style={styles.View_4_8536}>
              <Text style={styles.Text_4_8536}>Jiangyu</Text>
            </View>
          </View>
          <View style={styles.View_4_8537}>
            <View style={styles.View_4_8538}>
              <Text style={styles.Text_4_8538}>Full Name</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_4_8539}>
          <View style={styles.View_4_8540}>
            <View style={styles.View_4_8541}>
              <Text style={styles.Text_4_8541}>Or</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d0a/46df/e2e70dc0aac2bc15a333c54d22164e36"
            }}
            style={styles.ImageBackground_4_8542}
          />
        </View>
        <View style={styles.View_4_8545}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e46/1687/e70458c241213435f014aa59a42b753d"
            }}
            style={styles.ImageBackground_4_8546}
          />
          <View style={styles.View_4_8548}>
            <View style={styles.View_4_8549}>
              <Text style={styles.Text_4_8549}>Facebook</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a4a/77e8/9db2300f4fc28d6998b3f72e683380d9"
            }}
            style={styles.ImageBackground_4_8550}
          />
        </View>
        <View style={styles.View_4_8552}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7c4/89fe/b73afbc9922eab5538481c23887c0f7a"
            }}
            style={styles.ImageBackground_4_8553}
          />
          <View style={styles.View_4_8555}>
            <View style={styles.View_4_8556}>
              <Text style={styles.Text_4_8556}>Google</Text>
            </View>
          </View>
          <View style={styles.View_4_8557}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a52/becb/ac0d73318ca6c729d10287e0e8dc1c9d"
              }}
              style={styles.ImageBackground_4_8558}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e887/fb50/ac324d94d934beafe0d2075372ea7fb6"
              }}
              style={styles.ImageBackground_4_8559}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9e8/645b/96dbf7adfbbc2dd0ddaecb42e31a8c20"
              }}
              style={styles.ImageBackground_4_8561}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cb2/4e2c/4bfe78c459e59cb8e870b69519670719"
              }}
              style={styles.ImageBackground_4_8562}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b14c/bfbf/85dc7d7338804b669d680efd3d50a40e"
              }}
              style={styles.ImageBackground_4_8563}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fb4/82cd/6680411bf25271e9fa1a57ea4b1915aa"
              }}
              style={styles.ImageBackground_4_8564}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1f0/8a1e/5aa5d0574d36a0805042aec50e0e5a44"
              }}
              style={styles.ImageBackground_4_8565}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d36/74bb/a87a10a6b9ecfdeeea46b6944f7d518c"
              }}
              style={styles.ImageBackground_4_8566}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/048c/5b31/74c14c6f724bd2a29e35c6ab3081b13c"
              }}
              style={styles.ImageBackground_4_8567}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96b9/587e/e6fd56ece176c8f4401c2dc19c1cfeec"
              }}
              style={styles.ImageBackground_4_8568}
            />
          </View>
        </View>
        <View style={styles.View_4_8569}>
          <View style={styles.View_4_8570}>
            <Text style={styles.Text_4_8570}>Sign Up</Text>
          </View>
        </View>
        <View style={styles.View_4_8571}>
          <View style={styles.View_4_8572}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43d4/5ab8/2502af11f28e94975a2f16f4cf809ac9"
              }}
              style={styles.ImageBackground_4_8573}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d953/e040/e2fa70fc704ed9b83a96026e4a1e80e8"
              }}
              style={styles.ImageBackground_4_8576}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d953/e040/e2fa70fc704ed9b83a96026e4a1e80e8"
              }}
              style={styles.ImageBackground_4_8577}
            />
          </View>
          <View style={styles.View_4_8578}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/43d4/5ab8/2502af11f28e94975a2f16f4cf809ac9"
              }}
              style={styles.ImageBackground_4_8579}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d953/e040/e2fa70fc704ed9b83a96026e4a1e80e8"
              }}
              style={styles.ImageBackground_4_8582}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d953/e040/e2fa70fc704ed9b83a96026e4a1e80e8"
              }}
              style={styles.ImageBackground_4_8583}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(250, 250, 250, 1)" },
  View_2: { height: hp("152%") },
  View_4_7726: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("58%"),
    minHeight: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("47%")
  },
  View_4_7727: {
    width: wp("45%"),
    height: hp("45%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_4_7728: {
    width: wp("45%"),
    height: hp("45%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7730: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  View_4_7731: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7732: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7733: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7735: {
    width: wp("31%"),
    height: hp("58%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_4_7736: {
    width: wp("31%"),
    height: hp("2%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7738: {
    width: wp("29%"),
    height: hp("57%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_7739: {
    width: wp("21%"),
    height: hp("57%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_4_7740: {
    width: wp("20%"),
    height: hp("57%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7741: {
    width: wp("8%"),
    height: hp("16%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_4_7742: {
    width: wp("8%"),
    height: hp("15%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7744: {
    width: wp("4%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_4_7746: {
    width: wp("14%"),
    height: hp("26%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7747: {
    width: wp("5%"),
    height: hp("7%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7748: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_4_7749: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7750: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7752: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7753: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7754: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7756: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7757: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7758: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7759: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7761: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_4_7762: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7763: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7764: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7765: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7767: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_4_7768: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7769: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7770: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7772: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_4_7773: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7774: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7775: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7777: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_7778: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7779: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7780: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7782: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_7783: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7784: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7785: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7787: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_7788: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7789: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7790: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7792: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_7793: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7794: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7795: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7797: {
    width: wp("10%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_4_7798: {
    width: wp("10%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7800: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_4_7801: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7803: {
    width: wp("3%"),
    height: hp("13%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_4_7804: {
    width: wp("3%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7806: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_4_7807: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_4_7808: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7809: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7811: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7812: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7813: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7815: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7816: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7817: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7818: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7820: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_4_7821: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7822: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7823: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7824: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7826: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_7827: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7828: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7829: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7831: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_4_7832: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7833: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7834: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7836: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_7837: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7838: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7839: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7841: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_7842: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7843: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7844: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7846: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_7847: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7848: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7849: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7851: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_7852: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7853: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7854: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7856: {
    width: wp("8%"),
    height: hp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_4_7857: {
    width: wp("8%"),
    height: hp("24%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7858: {
    width: wp("8%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7859: {
    width: wp("8%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7860: {
    width: wp("8%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7861: {
    width: wp("8%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7863: {
    width: wp("6%"),
    height: hp("7%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_7868: {
    width: wp("1%"),
    height: hp("14%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_4_7870: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_4_7872: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_4_7874: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_7875: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7876: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7877: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7879: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_7880: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7881: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7882: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7884: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_7885: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7886: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7887: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7889: {
    width: wp("4%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7890: {
    width: wp("4%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7891: {
    width: wp("4%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7892: {
    width: wp("4%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7893: {
    width: wp("4%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7894: {
    width: wp("4%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7896: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_7897: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7898: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7899: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7900: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7902: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7903: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7904: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7905: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7907: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_7908: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7909: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7910: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7912: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_7913: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7914: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7915: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7917: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_7918: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7919: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7920: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7922: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_7923: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7924: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7925: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7927: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_7928: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7929: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7930: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7932: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_7933: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7934: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7935: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7937: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_7938: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7939: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7940: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7942: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_7943: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7944: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7945: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7947: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_7948: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7949: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7950: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7952: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_7953: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7954: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7955: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7957: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_4_7958: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7959: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7960: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7962: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_4_7963: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7964: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7965: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7967: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_4_7968: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7969: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7970: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7972: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_4_7973: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7974: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7975: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7977: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7978: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7979: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7980: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7981: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7982: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7984: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7985: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_7986: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7987: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7988: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7989: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7991: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7992: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7993: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7994: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_7995: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7997: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_4_7998: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_7999: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8000: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8001: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8003: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8004: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8005: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8006: {
    width: wp("0%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8008: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8009: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8010: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8011: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8012: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8014: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_4_8016: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8018: {
    width: wp("11%"),
    height: hp("21%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_4_8019: {
    width: wp("11%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8021: {
    width: wp("9%"),
    height: hp("19%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_4_8022: {
    width: wp("9%"),
    height: hp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8024: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_4_8025: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8027: {
    width: wp("9%"),
    height: hp("18%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_4_8028: {
    width: wp("8%"),
    height: hp("17%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8030: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8031: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8032: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8033: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8034: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8035: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8036: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8037: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8038: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8039: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8040: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8041: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8042: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8043: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8045: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8046: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8047: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8048: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8049: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8050: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8051: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8052: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8053: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8054: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8055: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8056: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8057: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8059: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8060: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8061: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8062: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8063: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8064: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8065: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8066: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8067: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8068: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8069: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8070: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8071: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8073: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_4_8074: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8076: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8078: {
    width: wp("3%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_4_8080: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_4_8082: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_4_8084: {
    width: wp("10%"),
    height: hp("38%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_4_8085: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_8086: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8088: {
    width: wp("9%"),
    height: hp("19%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8089: {
    width: wp("9%"),
    height: hp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8091: {
    width: wp("6%"),
    height: hp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_4_8092: {
    width: wp("6%"),
    height: hp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8094: {
    width: wp("29%"),
    height: hp("40%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8095: {
    width: wp("12%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_4_8096: {
    width: wp("12%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8097: {
    width: wp("9%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_4_8098: {
    width: wp("9%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8099: {
    width: wp("9%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8100: {
    width: wp("9%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8102: {
    width: wp("8%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8103: {
    width: wp("8%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8105: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_4_8106: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8107: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8109: {
    width: wp("2%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_4_8110: {
    width: wp("2%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8111: {
    width: wp("2%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8113: {
    width: wp("29%"),
    height: hp("29%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8114: {
    width: wp("29%"),
    height: hp("29%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8115: {
    width: wp("29%"),
    height: hp("29%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8116: {
    width: wp("29%"),
    height: hp("29%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8117: {
    width: wp("28%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_8119: {
    width: wp("26%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_4_8121: {
    width: wp("24%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_4_8123: {
    width: wp("4%"),
    height: hp("25%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%")
  },
  ImageBackground_4_8125: {
    width: wp("4%"),
    height: hp("25%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8127: {
    width: wp("28%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8129: {
    width: wp("2%"),
    height: hp("7%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  View_4_8130: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8131: {
    width: wp("1%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8132: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8133: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8135: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8136: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8138: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8139: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8141: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8142: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8144: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_8145: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8147: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8148: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8150: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8151: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8153: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8154: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8156: {
    width: wp("0%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8157: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8158: {
    width: wp("0%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8160: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8161: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8163: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8164: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8166: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8167: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8169: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8170: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8172: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8173: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8175: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8176: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8178: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8179: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8181: {
    width: wp("1%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8182: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8183: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8185: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8186: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8188: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8189: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8191: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8192: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8194: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8195: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8197: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8198: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8200: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8201: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8203: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8204: {
    width: wp("0%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8206: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8207: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8208: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8210: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8211: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8212: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8214: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8215: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8217: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8218: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8220: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8221: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8223: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8224: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8226: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8227: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8229: {
    width: wp("3%"),
    height: hp("13%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_8230: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8231: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8232: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8234: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8235: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8237: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8238: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8240: {
    width: wp("3%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8241: {
    width: wp("3%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8242: {
    width: wp("3%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8243: {
    width: wp("3%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8245: {
    width: wp("0%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8246: {
    width: wp("0%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8247: {
    width: wp("0%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8249: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8250: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8251: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8253: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8254: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8255: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8257: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8258: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8259: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8261: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8262: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8263: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8265: {
    width: wp("48%"),
    height: hp("49%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8266: {
    width: wp("10%"),
    height: hp("41%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  View_4_8267: {
    width: wp("8%"),
    height: hp("1%"),
    top: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_8268: {
    width: wp("8%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8270: {
    width: wp("8%"),
    height: hp("20%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8271: {
    width: wp("8%"),
    height: hp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8272: {
    width: wp("7%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8273: {
    width: wp("7%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8274: {
    width: wp("7%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8276: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8277: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8278: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8280: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8281: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8282: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8284: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8285: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8286: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8288: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_4_8289: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8290: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8292: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8293: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8294: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8296: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_4_8297: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8298: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8300: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8301: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_4_8302: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8303: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8305: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8306: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8307: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8309: {
    width: wp("10%"),
    height: hp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8310: {
    width: wp("10%"),
    height: hp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8311: {
    width: wp("10%"),
    height: hp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8312: {
    width: wp("4%"),
    height: hp("11%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_4_8313: {
    width: wp("4%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8314: {
    width: wp("4%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8316: {
    width: wp("2%"),
    height: hp("9%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8317: {
    width: wp("2%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8319: {
    width: wp("3%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_4_8320: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8321: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8323: {
    width: wp("1%"),
    height: hp("13%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_8324: {
    width: wp("1%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8326: {
    width: wp("4%"),
    height: hp("14%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_8327: {
    width: wp("4%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8328: {
    width: wp("4%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8330: {
    width: wp("1%"),
    height: hp("12%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_4_8331: {
    width: wp("1%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8333: {
    width: wp("4%"),
    height: hp("10%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8334: {
    width: wp("4%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8335: {
    width: wp("4%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8337: {
    width: wp("2%"),
    height: hp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_4_8338: {
    width: wp("2%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8340: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_4_8341: {
    width: wp("5%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8343: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_4_8344: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8346: {
    width: wp("10%"),
    height: hp("49%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8347: {
    width: wp("5%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8348: {
    width: wp("1%"),
    height: hp("10%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_8349: {
    width: wp("1%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8350: {
    width: wp("1%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8351: {
    width: wp("1%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8353: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8354: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8355: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8357: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8358: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8359: {
    width: wp("5%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8361: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8362: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8363: {
    width: wp("5%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8365: {
    width: wp("1%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_4_8366: {
    width: wp("1%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8367: {
    width: wp("1%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8369: {
    width: wp("1%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8370: {
    width: wp("1%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8371: {
    width: wp("1%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8373: {
    width: wp("0%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_4_8374: {
    width: wp("0%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8375: {
    width: wp("0%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8377: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8378: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8379: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8381: {
    width: wp("4%"),
    height: hp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_4_8382: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8383: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8384: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8385: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8386: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8387: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8389: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8390: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8391: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8392: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8394: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8395: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8396: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8397: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8399: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8400: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8401: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8402: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8404: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8405: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8406: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8407: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8408: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8409: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8411: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8412: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8413: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8414: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8416: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8417: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8418: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8419: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8421: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8422: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8423: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8424: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8426: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8427: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8428: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8430: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8431: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8432: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8433: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8435: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8436: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8437: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8438: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8440: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8441: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8442: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8443: {
    width: wp("3%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8445: {
    width: wp("10%"),
    height: hp("32%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8446: {
    width: wp("10%"),
    height: hp("2%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8447: {
    width: wp("10%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8448: {
    width: wp("10%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8450: {
    width: wp("8%"),
    height: hp("30%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_8451: {
    width: wp("8%"),
    height: hp("30%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8453: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_8454: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8455: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8457: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8458: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8459: {
    width: wp("9%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8461: {
    width: wp("6%"),
    height: hp("7%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_8462: {
    width: wp("6%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8463: {
    width: wp("6%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8465: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_4_8466: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8467: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8469: {
    width: wp("6%"),
    height: hp("6%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_8470: {
    width: wp("6%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8471: {
    width: wp("6%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8473: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_4_8474: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8475: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8477: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_4_8478: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8479: {
    width: wp("5%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8481: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_4_8482: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8483: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8485: {
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
  View_4_8486: {
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
  View_4_8487: {
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
  View_4_8488: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("137%")
  },
  View_4_8489: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_8489: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_8490: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("126%")
  },
  ImageBackground_4_8491: {
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
  View_4_8492: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4_8492: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_8493: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("116%")
  },
  View_4_8494: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_4_8495: {
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
  View_4_8496: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_4_8497: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_8497: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_8498: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("101%")
  },
  ImageBackground_4_8499: {
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
  View_4_8501: {
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
  View_4_8502: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8503: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8504: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8507: {
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
  View_4_8516: {
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
  View_4_8517: {
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
  Text_4_8517: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_8518: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("88%")
  },
  ImageBackground_4_8519: {
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
  View_4_8521: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%")
  },
  View_4_8522: {
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
  Text_4_8522: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_8523: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_8524: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_8524: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_8525: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("74%")
  },
  ImageBackground_4_8526: {
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
  View_4_8528: {
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
  View_4_8529: {
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
  Text_4_8529: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_8530: {
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
  View_4_8531: {
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
  Text_4_8531: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_8532: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("60%")
  },
  ImageBackground_4_8533: {
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
  View_4_8535: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%")
  },
  View_4_8536: {
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
  Text_4_8536: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_8537: {
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
  View_4_8538: {
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
  Text_4_8538: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_8539: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("53%")
  },
  View_4_8540: {
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
  View_4_8541: {
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
  Text_4_8541: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_8542: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_4_8545: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("43%")
  },
  ImageBackground_4_8546: {
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
  View_4_8548: {
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
  View_4_8549: {
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
  Text_4_8549: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_8550: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_4_8552: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("43%")
  },
  ImageBackground_4_8553: {
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
  View_4_8555: {
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
  View_4_8556: {
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
  Text_4_8556: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_8557: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_4_8558: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8559: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_8561: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8562: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8563: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_8564: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8565: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8566: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_4_8567: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_8568: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_8569: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("31%")
  },
  View_4_8570: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_8570: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_8571: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("13%")
  },
  View_4_8572: {
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
  ImageBackground_4_8573: {
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
  ImageBackground_4_8576: {
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
  ImageBackground_4_8577: {
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
  View_4_8578: {
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
  ImageBackground_4_8579: {
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
  ImageBackground_4_8582: {
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
  ImageBackground_4_8583: {
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
