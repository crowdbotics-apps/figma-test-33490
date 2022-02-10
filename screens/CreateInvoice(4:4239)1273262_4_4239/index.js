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
      <View style={styles.View_4_4240}>
        <View style={styles.View_4_4241}>
          <View style={styles.View_4_4242} />
        </View>
        <View style={styles.View_4_4243}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e02/ed93/1689b78c65ab7c9665f3afb121b36b4f"
            }}
            style={styles.ImageBackground_4_4244}
          />
          <View style={styles.View_4_4246}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ccf/24f1/f9c0d537f1956e486e3b3c22fea87d30"
              }}
              style={styles.ImageBackground_4_4247}
            />
          </View>
        </View>
        <View style={styles.View_4_4251}>
          <View style={styles.View_4_4252}>
            <Text style={styles.Text_4_4252}>Preview</Text>
          </View>
        </View>
        <View style={styles.View_4_4253}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b04/03dd/8311944e4d81dcc4f99b2aeaa46f6725"
            }}
            style={styles.ImageBackground_4_4254}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/223e/8f3c/ebf423026b059ba33a01a3d8ceead9d8"
            }}
            style={styles.ImageBackground_4_4255}
          />
          <View style={styles.View_4_4256}>
            <View style={styles.View_4_4257}>
              <Text style={styles.Text_4_4257}>@</Text>
            </View>
            <View style={styles.View_4_4258}>
              <Text style={styles.Text_4_4258}>m</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad4e/3154/dacf68c1fec7ad75780e17f87b3cabfe"
              }}
              style={styles.ImageBackground_4_4259}
            />
            <View style={styles.View_4_4260}>
              <Text style={styles.Text_4_4260}>your.mail@gmail.com</Text>
            </View>
            <View style={styles.View_4_4261}>
              <Text style={styles.Text_4_4261}>+386 989 271 3115</Text>
            </View>
            <View style={styles.View_4_4262}>
              <Text style={styles.Text_4_4262}>
                The company is registered in the business register under no.
                87650000
              </Text>
            </View>
            <View style={styles.View_4_4263}>
              <Text style={styles.Text_4_4263}>
                YOUR COMPANY 1331 Hart Ridge Road, 48436 Gaines, MI
              </Text>
            </View>
          </View>
          <View style={styles.View_4_4264}>
            <View style={styles.View_4_4265}>
              <Text style={styles.Text_4_4265}>NOTES</Text>
            </View>
            <View style={styles.View_4_4266}>
              <Text style={styles.Text_4_4266}>
                All amounts are in dollars. Please make the payment within 15
                days from the issue of date of this invoice. Tax is not charged
                on the basis of paragraph 1 of Article 94 of the Value Added Tax
                Act (I am not liable for VAT). Thank you for you confidence in
                my work. Signiture
              </Text>
            </View>
          </View>
          <View style={styles.View_4_4267}>
            <View style={styles.View_4_4268}>
              <Text style={styles.Text_4_4268}>AMOUNT</Text>
            </View>
            <View style={styles.View_4_4269}>
              <Text style={styles.Text_4_4269}>DISCOUNT 5%</Text>
            </View>
            <View style={styles.View_4_4270}>
              <Text style={styles.Text_4_4270}>TASK DESCRIPTION</Text>
            </View>
            <View style={styles.View_4_4271}>
              <Text style={styles.Text_4_4271}>HOURS</Text>
            </View>
            <View style={styles.View_4_4272}>
              <Text style={styles.Text_4_4272}>TOTAL</Text>
            </View>
            <View style={styles.View_4_4273}>
              <Text style={styles.Text_4_4273}>RATE</Text>
            </View>
            <View style={styles.View_4_4274}>
              <Text style={styles.Text_4_4274}>SUBTOTAL</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6665/0b63/6fc78d9dde12d03365da958468728446"
              }}
              style={styles.ImageBackground_4_4275}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6665/0b63/6fc78d9dde12d03365da958468728446"
              }}
              style={styles.ImageBackground_4_4276}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad4e/3154/dacf68c1fec7ad75780e17f87b3cabfe"
              }}
              style={styles.ImageBackground_4_4277}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad4e/3154/dacf68c1fec7ad75780e17f87b3cabfe"
              }}
              style={styles.ImageBackground_4_4278}
            />
            <View style={styles.View_4_4279}>
              <Text style={styles.Text_4_4279}>Website redesign</Text>
            </View>
            <View style={styles.View_4_4280}>
              <Text style={styles.Text_4_4280}>60</Text>
            </View>
            <View style={styles.View_4_4281}>
              <Text style={styles.Text_4_4281}>15 USD</Text>
            </View>
            <View style={styles.View_4_4282}>
              <Text style={styles.Text_4_4282}>900,00 USD</Text>
            </View>
            <View style={styles.View_4_4283}>
              <Text style={styles.Text_4_4283}>Newsletter template design</Text>
            </View>
            <View style={styles.View_4_4284}>
              <Text style={styles.Text_4_4284}>20</Text>
            </View>
            <View style={styles.View_4_4285}>
              <Text style={styles.Text_4_4285}>12 USD</Text>
            </View>
            <View style={styles.View_4_4286}>
              <Text style={styles.Text_4_4286}>240,00 USD</Text>
            </View>
            <View style={styles.View_4_4287}>
              <Text style={styles.Text_4_4287}>57,00 USD</Text>
            </View>
            <View style={styles.View_4_4288}>
              <Text style={styles.Text_4_4288}>1140,00 USD</Text>
            </View>
            <View style={styles.View_4_4289}>
              <Text style={styles.Text_4_4289}>1083,00 USD</Text>
            </View>
          </View>
          <View style={styles.View_4_4290}>
            <View style={styles.View_4_4291}>
              <Text style={styles.Text_4_4291}>BANK: </Text>
            </View>
            <View style={styles.View_4_4292}>
              <Text style={styles.Text_4_4292}>IBAN:</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0da/ab9a/989fa20885f40ec0ed5d0ed3ebab20e5"
              }}
              style={styles.ImageBackground_4_4293}
            />
            <View style={styles.View_4_4294}>
              <Text style={styles.Text_4_4294}>FTSBUS33</Text>
            </View>
            <View style={styles.View_4_4295}>
              <Text style={styles.Text_4_4295}>GB82-1111-2222-3333</Text>
            </View>
            <View style={styles.View_4_4296}>
              <Text style={styles.Text_4_4296}>
                Transfer the amount to the business account below. Please
                include invoice number on your check.
              </Text>
            </View>
          </View>
          <View style={styles.View_4_4297}>
            <View style={styles.View_4_4298}>
              <Text style={styles.Text_4_4298}>Invoice</Text>
            </View>
            <View style={styles.View_4_4299}>
              <Text style={styles.Text_4_4299}>invoice no.</Text>
            </View>
            <View style={styles.View_4_4300}>
              <Text style={styles.Text_4_4300}>Invoice date</Text>
            </View>
            <View style={styles.View_4_4301}>
              <Text style={styles.Text_4_4301}>001/2021</Text>
            </View>
            <View style={styles.View_4_4302}>
              <Text style={styles.Text_4_4302}>January 1, 2021</Text>
            </View>
          </View>
          <View style={styles.View_4_4303}>
            <View style={styles.View_4_4304}>
              <Text style={styles.Text_4_4304}>@</Text>
            </View>
            <View style={styles.View_4_4305}>
              <Text style={styles.Text_4_4305}>m</Text>
            </View>
            <View style={styles.View_4_4306}>
              <Text style={styles.Text_4_4306}>your.mail@gmail.com</Text>
            </View>
            <View style={styles.View_4_4307}>
              <Text style={styles.Text_4_4307}>+386 989 271 3115</Text>
            </View>
          </View>
          <View style={styles.View_4_4308}>
            <View style={styles.View_4_4309}>
              <Text style={styles.Text_4_4309}>RECIPIENT</Text>
            </View>
            <View style={styles.View_4_4310}>
              <Text style={styles.Text_4_4310}>@</Text>
            </View>
            <View style={styles.View_4_4311}>
              <Text style={styles.Text_4_4311}>m</Text>
            </View>
            <View style={styles.View_4_4312}>
              <Text style={styles.Text_4_4312}>company.mail@gmail.com</Text>
            </View>
            <View style={styles.View_4_4313}>
              <Text style={styles.Text_4_4313}>+386 714 505 8385</Text>
            </View>
            <View style={styles.View_4_4314}>
              <Text style={styles.Text_4_4314}>
                JOHN SMITH 4304 Liberty Avenue 92680 Tustin, CA VAT no.:
                12345678
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_4_4315}>
        <View style={styles.View_4_4316}>
          <View style={styles.View_4_4317} />
        </View>
        <View style={styles.View_4_4318}>
          <View style={styles.View_4_4319} />
          <View style={styles.View_4_4320}>
            <View style={styles.View_4_4321}>
              <Text style={styles.Text_4_4321}>Create Invoice</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_4_4322}>
          <View style={styles.View_4_4323} />
          <View style={styles.View_4_4324}>
            <Text style={styles.Text_4_4324}>Send Invoice</Text>
          </View>
        </View>
        <View style={styles.View_4_4325}>
          <View style={styles.View_4_4326}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3573/dbbb/4c65fad19a0d41fb4a18b784334a0565"
              }}
              style={styles.ImageBackground_4_4327}
            />
            <View style={styles.View_4_4329}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f213/d363/888ecbcaadba9d8985e0ea8b977550f1"
                }}
                style={styles.ImageBackground_4_4330}
              />
              <View style={styles.View_4_4331}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/704a/b548/cc3cf3eec9116c30849e2ef05654ff00"
                  }}
                  style={styles.ImageBackground_4_4332}
                />
              </View>
            </View>
            <View style={styles.View_4_4335}>
              <View style={styles.View_4_4336}>
                <Text style={styles.Text_4_4336}>$8850</Text>
              </View>
            </View>
            <View style={styles.View_4_4337}>
              <View style={styles.View_4_4338}>
                <Text style={styles.Text_4_4338}>10 Pcs</Text>
              </View>
            </View>
            <View style={styles.View_4_4339}>
              <View style={styles.View_4_4340}>
                <Text style={styles.Text_4_4340}>$885</Text>
              </View>
            </View>
            <View style={styles.View_4_4341}>
              <View style={styles.View_4_4342}>
                <Text style={styles.Text_4_4342}>i phone 12</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_4_4343}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3573/dbbb/4c65fad19a0d41fb4a18b784334a0565"
              }}
              style={styles.ImageBackground_4_4344}
            />
            <View style={styles.View_4_4346}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f213/d363/888ecbcaadba9d8985e0ea8b977550f1"
                }}
                style={styles.ImageBackground_4_4347}
              />
              <View style={styles.View_4_4348}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/704a/b548/cc3cf3eec9116c30849e2ef05654ff00"
                  }}
                  style={styles.ImageBackground_4_4349}
                />
              </View>
            </View>
            <View style={styles.View_4_4352}>
              <View style={styles.View_4_4353}>
                <Text style={styles.Text_4_4353}>$150,000</Text>
              </View>
            </View>
            <View style={styles.View_4_4354}>
              <View style={styles.View_4_4355}>
                <Text style={styles.Text_4_4355}>10 Pcs</Text>
              </View>
            </View>
            <View style={styles.View_4_4356}>
              <View style={styles.View_4_4357}>
                <Text style={styles.Text_4_4357}>$1500</Text>
              </View>
            </View>
            <View style={styles.View_4_4358}>
              <View style={styles.View_4_4359}>
                <Text style={styles.Text_4_4359}>Apple Mackbook</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_4_4360}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3573/dbbb/4c65fad19a0d41fb4a18b784334a0565"
              }}
              style={styles.ImageBackground_4_4361}
            />
            <View style={styles.View_4_4363}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f213/d363/888ecbcaadba9d8985e0ea8b977550f1"
                }}
                style={styles.ImageBackground_4_4364}
              />
              <View style={styles.View_4_4365}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/704a/b548/cc3cf3eec9116c30849e2ef05654ff00"
                  }}
                  style={styles.ImageBackground_4_4366}
                />
              </View>
            </View>
            <View style={styles.View_4_4369}>
              <View style={styles.View_4_4370}>
                <Text style={styles.Text_4_4370}>$10,000</Text>
              </View>
            </View>
            <View style={styles.View_4_4371}>
              <View style={styles.View_4_4372}>
                <Text style={styles.Text_4_4372}>10 Pcs</Text>
              </View>
            </View>
            <View style={styles.View_4_4373}>
              <View style={styles.View_4_4374}>
                <Text style={styles.Text_4_4374}>$1000</Text>
              </View>
            </View>
            <View style={styles.View_4_4375}>
              <View style={styles.View_4_4376}>
                <Text style={styles.Text_4_4376}>ipod 2021</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_4_4377}>
            <View style={styles.View_4_4378}>
              <View style={styles.View_4_4379}>
                <Text style={styles.Text_4_4379}>Amount</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c91b/58c5/a8bdb3090a5122c9128d617b23bd62ea"
                }}
                style={styles.ImageBackground_4_4380}
              />
            </View>
            <View style={styles.View_4_4381}>
              <View style={styles.View_4_4382}>
                <Text style={styles.Text_4_4382}>QTY</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c91b/58c5/a8bdb3090a5122c9128d617b23bd62ea"
                }}
                style={styles.ImageBackground_4_4383}
              />
            </View>
            <View style={styles.View_4_4384}>
              <View style={styles.View_4_4385}>
                <Text style={styles.Text_4_4385}>Rate</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c91b/58c5/a8bdb3090a5122c9128d617b23bd62ea"
                }}
                style={styles.ImageBackground_4_4386}
              />
            </View>
            <View style={styles.View_4_4387}>
              <View style={styles.View_4_4388}>
                <Text style={styles.Text_4_4388}>Product Name</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c91b/58c5/a8bdb3090a5122c9128d617b23bd62ea"
                }}
                style={styles.ImageBackground_4_4389}
              />
            </View>
          </View>
          <View style={styles.View_4_4390}>
            <View style={styles.View_4_4391} />
            <View style={styles.View_4_4392}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40a8/4a1e/0bfbfaaf334497f4fb0e086ab91548b0"
                }}
                style={styles.ImageBackground_4_4393}
              />
            </View>
          </View>
          <View style={styles.View_4_4396}>
            <View style={styles.View_4_4397}>
              <Text style={styles.Text_4_4397}>Product Description</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_4_4398}>
          <View style={styles.View_4_4399}>
            <View style={styles.View_4_4400}>
              <View style={styles.View_4_4401} />
            </View>
            <View style={styles.View_4_4402}>
              <View style={styles.View_4_4403}>
                <Text style={styles.Text_4_4403}>Street</Text>
              </View>
            </View>
            <View style={styles.View_4_4404}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f28d/7080/96ca600e8a4ba4b38bbce7604caf088d"
                }}
                style={styles.ImageBackground_4_4405}
              />
            </View>
            <View style={styles.View_4_4408}>
              <View style={styles.View_4_4409}>
                <Text style={styles.Text_4_4409}>Address</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_4_4410}>
            <View style={styles.View_4_4411}>
              <View style={styles.View_4_4412} />
            </View>
            <View style={styles.View_4_4413}>
              <View style={styles.View_4_4414}>
                <Text style={styles.Text_4_4414}>Example@gmail.com</Text>
              </View>
            </View>
            <View style={styles.View_4_4415}>
              <View style={styles.View_4_4416}>
                <Text style={styles.Text_4_4416}>Email</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_4_4417}>
          <View style={styles.View_4_4418}>
            <View style={styles.View_4_4419} />
          </View>
          <View style={styles.View_4_4420}>
            <View style={styles.View_4_4421}>
              <Text style={styles.Text_4_4421}>Alison G.</Text>
            </View>
          </View>
          <View style={styles.View_4_4422}>
            <View style={styles.View_4_4423}>
              <Text style={styles.Text_4_4423}>Name</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_4_4424}>
          <View style={styles.View_4_4425}>
            <View style={styles.View_4_4426} />
          </View>
          <View style={styles.View_4_4427}>
            <View style={styles.View_4_4428}>
              <Text style={styles.Text_4_4428}>01/12/2021</Text>
            </View>
          </View>
          <View style={styles.View_4_4429}>
            <View style={styles.View_4_4430}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c07/42c9/1d0959e7c8f341d18e09a4e2f8ace639"
                }}
                style={styles.ImageBackground_4_4431}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                }}
                style={styles.ImageBackground_4_4438}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                }}
                style={styles.ImageBackground_4_4439}
              />
            </View>
          </View>
          <View style={styles.View_4_4440}>
            <View style={styles.View_4_4441}>
              <Text style={styles.Text_4_4441}>Date</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_4_4442}>
          <View style={styles.View_4_4443}>
            <View style={styles.View_4_4444} />
          </View>
          <View style={styles.View_4_4445}>
            <View style={styles.View_4_4446}>
              <Text style={styles.Text_4_4446}>#876370</Text>
            </View>
          </View>
          <View style={styles.View_4_4447}>
            <View style={styles.View_4_4448}>
              <Text style={styles.Text_4_4448}>Invoice Id</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_4_4449}>
          <View style={styles.View_4_4450} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a077/9d9b/39ed00f794f66031e50bd7b86a1b36d6"
            }}
            style={styles.ImageBackground_4_4451}
          />
        </View>
        <View style={styles.View_4_4456}>
          <View style={styles.View_4_4457}>
            <Text style={styles.Text_4_4457}>Create New Invoice</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_4_4458}>
        <View style={styles.View_4_4459} />
        <View style={styles.View_4_4460}>
          <View style={styles.View_4_4461}>
            <View style={styles.View_4_4462}>
              <View style={styles.View_4_4463} />
              <View style={styles.View_4_4464} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d2b/4d1e/2193c206aa76c6cf69cc4694e07bf5e8"
                }}
                style={styles.ImageBackground_4_4465}
              />
            </View>
            <View style={styles.View_4_4466}>
              <View style={styles.View_4_4467}>
                <Text style={styles.Text_4_4467}>Easin Arafat</Text>
              </View>
              <View style={styles.View_4_4468}>
                <Text style={styles.Text_4_4468}>Free Account</Text>
              </View>
            </View>
            <View style={styles.View_4_4469}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc1a/2eba/0aa67901c54461805771050cc7023642"
                }}
                style={styles.ImageBackground_4_4470}
              />
            </View>
          </View>
          <View style={styles.View_4_4473}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f2f4/0c95/81bdc8b738e9d78a8c0fcb6e5f533c18"
              }}
              style={styles.ImageBackground_4_4474}
            />
            <View style={styles.View_4_4475} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/717b/5880/42da195c9040e7656dfc7781a0a5355a"
              }}
              style={styles.ImageBackground_4_4476}
            />
            <View style={styles.View_4_4477} />
            <View style={styles.View_4_4478}>
              <Text style={styles.Text_4_4478}>Upgrade Now</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7666/ed91/7a0572657905c9eead4f1b297e4437e1"
              }}
              style={styles.ImageBackground_4_4479}
            />
          </View>
          <View style={styles.View_4_4480}>
            <View style={styles.View_4_4481}>
              <Text style={styles.Text_4_4481}>Settings</Text>
            </View>
            <View style={styles.View_4_4482}>
              <View style={styles.View_4_4483}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f46c/1d21/612563682d5690a13e173c148c1857e0"
                  }}
                  style={styles.ImageBackground_4_4484}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_4_4487}>
            <View style={styles.View_4_4488}>
              <Text style={styles.Text_4_4488}>Notification</Text>
            </View>
            <View style={styles.View_4_4489}>
              <View style={styles.View_4_4490}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e389/d51c/11a28d8f4d77eb78b9a4da026525d076"
                  }}
                  style={styles.ImageBackground_4_4491}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_4_4494}>
            <View style={styles.View_4_4495}>
              <Text style={styles.Text_4_4495}>Messages</Text>
            </View>
            <View style={styles.View_4_4496} />
            <View style={styles.View_4_4497}>
              <Text style={styles.Text_4_4497}>49</Text>
            </View>
            <View style={styles.View_4_4498}>
              <View style={styles.View_4_4499}>
                <View style={styles.View_4_4500}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d06/ba21/7883d97c84f007b51c0da7c398107c6c"
                    }}
                    style={styles.ImageBackground_4_4501}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1358/f7bb/7194af283fd865d20fd719011d30587a"
                    }}
                    style={styles.ImageBackground_4_4504}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_4_4505}>
            <View style={styles.View_4_4506}>
              <Text style={styles.Text_4_4506}>Calendar</Text>
            </View>
            <View style={styles.View_4_4507}>
              <View style={styles.View_4_4508}>
                <View style={styles.View_4_4509}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a34/d215/66dd0d9809050b8346e53509986180b8"
                    }}
                    style={styles.ImageBackground_4_4510}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                    }}
                    style={styles.ImageBackground_4_4517}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                    }}
                    style={styles.ImageBackground_4_4518}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_4_4519}>
            <View style={styles.View_4_4520}>
              <Text style={styles.Text_4_4520}>Schedule</Text>
            </View>
            <View style={styles.View_4_4521}>
              <View style={styles.View_4_4522}>
                <View style={styles.View_4_4523}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd93/b969/54bdc19e205465bfb0c4278215a6c989"
                    }}
                    style={styles.ImageBackground_4_4524}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
                    }}
                    style={styles.ImageBackground_4_4528}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_4_4529}>
            <View style={styles.View_4_4530}>
              <Text style={styles.Text_4_4530}>Invoice</Text>
            </View>
            <View style={styles.View_4_4531} />
            <View style={styles.View_4_4532}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97ec/8d8c/e3c09ff9cceda1c255ab9f617874c5e3"
                }}
                style={styles.ImageBackground_4_4533}
              />
            </View>
          </View>
          <View style={styles.View_4_4536}>
            <View style={styles.View_4_4537}>
              <Text style={styles.Text_4_4537}>Analytics</Text>
            </View>
            <View style={styles.View_4_4538}>
              <View style={styles.View_4_4539}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8771/5bb4/3b77c65700e436309d51ee2630c5042b"
                  }}
                  style={styles.ImageBackground_4_4540}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_4_4545}>
            <View style={styles.View_4_4546}>
              <Text style={styles.Text_4_4546}>Dashboard</Text>
            </View>
            <View style={styles.View_4_4547}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5e2/07c6/f02cffcf6269c45267856eec62cb86c3"
                }}
                style={styles.ImageBackground_4_4548}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_4_4553}>
          <View style={styles.View_4_4554}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/163b/22d1/c1ea78f768e7ce3622df90a7578fc377"
              }}
              style={styles.ImageBackground_4_4555}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b50/7b2d/0c43892fd9e4bbbdbbf80cbc5d86179d"
              }}
              style={styles.ImageBackground_4_4558}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b50/7b2d/0c43892fd9e4bbbdbbf80cbc5d86179d"
              }}
              style={styles.ImageBackground_4_4559}
            />
          </View>
          <View style={styles.View_4_4560}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/163b/22d1/c1ea78f768e7ce3622df90a7578fc377"
              }}
              style={styles.ImageBackground_4_4561}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b50/7b2d/0c43892fd9e4bbbdbbf80cbc5d86179d"
              }}
              style={styles.ImageBackground_4_4564}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b50/7b2d/0c43892fd9e4bbbdbbf80cbc5d86179d"
              }}
              style={styles.ImageBackground_4_4565}
            />
          </View>
          <View style={styles.View_4_4566}>
            <Text style={styles.Text_4_4566}>Base</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(250, 250, 251, 1)" },
  View_2: { height: hp("128%") },
  View_4_4240: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("120%"),
    minHeight: hp("120%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("4%")
  },
  View_4_4241: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("120%"),
    minHeight: hp("120%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_4242: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("120%"),
    minHeight: hp("120%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_4_4243: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("4%")
  },
  ImageBackground_4_4244: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_4246: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_4_4247: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_4251: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%")
  },
  View_4_4252: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4252: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4253: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("104%"),
    minHeight: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("11%")
  },
  ImageBackground_4_4254: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_4255: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("5%")
  },
  View_4_4256: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("98%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_4_4257: {
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_4_4257: {
    color: "rgba(0, 153, 255, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4258: {
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_4_4258: {
    color: "rgba(0, 153, 255, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_4259: {
    width: wp("33%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_4260: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_4_4260: {
    color: "rgba(130, 134, 145, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4261: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_4_4261: {
    color: "rgba(130, 134, 145, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4262: {
    width: wp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    justifyContent: "flex-start"
  },
  Text_4_4262: {
    color: "rgba(130, 134, 145, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4263: {
    width: wp("9%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4263: {
    color: "rgba(130, 134, 145, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4264: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("79%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_4_4265: {
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4265: {
    color: "rgba(31, 34, 41, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.00009999999747378752,
    textTransform: "none"
  },
  View_4_4266: {
    width: wp("33%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4266: {
    color: "rgba(130, 134, 145, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4267: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("43%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_4_4268: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4268: {
    color: "rgba(157, 168, 187, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4269: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_4_4269: {
    color: "rgba(157, 168, 187, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4270: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4270: {
    color: "rgba(157, 168, 187, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4271: {
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4271: {
    color: "rgba(157, 168, 187, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4272: {
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_4_4272: {
    color: "rgba(31, 34, 41, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.0015999999595806003,
    textTransform: "uppercase"
  },
  View_4_4273: {
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4273: {
    color: "rgba(157, 168, 187, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4274: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_4_4274: {
    color: "rgba(157, 168, 187, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_4275: {
    width: wp("16%"),
    height: hp("0%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_4_4276: {
    width: wp("16%"),
    height: hp("0%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_4_4277: {
    width: wp("33%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_4278: {
    width: wp("33%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_4279: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_4_4279: {
    color: "rgba(31, 34, 41, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4280: {
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_4_4280: {
    color: "rgba(31, 34, 41, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4281: {
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_4_4281: {
    color: "rgba(31, 34, 41, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4282: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_4_4282: {
    color: "rgba(31, 34, 41, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4283: {
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_4_4283: {
    color: "rgba(31, 34, 41, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4284: {
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_4_4284: {
    color: "rgba(31, 34, 41, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4285: {
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_4_4285: {
    color: "rgba(31, 34, 41, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4286: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_4_4286: {
    color: "rgba(31, 34, 41, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4287: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_4_4287: {
    color: "rgba(31, 34, 41, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4288: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_4_4288: {
    color: "rgba(31, 34, 41, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4289: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_4_4289: {
    color: "rgba(0, 153, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4290: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("71%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_4_4291: {
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_4_4291: {
    color: "rgba(157, 168, 187, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.00019999999494757503,
    textTransform: "none"
  },
  View_4_4292: {
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_4_4292: {
    color: "rgba(157, 168, 187, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.00009999999747378752,
    textTransform: "none"
  },
  ImageBackground_4_4293: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  View_4_4294: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_4_4294: {
    color: "rgba(31, 34, 41, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.00009999999747378752,
    textTransform: "none"
  },
  View_4_4295: {
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_4_4295: {
    color: "rgba(31, 34, 41, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.00019999999494757503,
    textTransform: "none"
  },
  View_4_4296: {
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4296: {
    color: "rgba(130, 134, 145, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4297: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_4_4298: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4298: {
    color: "rgba(31, 34, 41, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.00019999999494757503,
    textTransform: "none"
  },
  View_4_4299: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_4_4299: {
    color: "rgba(31, 34, 41, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.0015999999595806003,
    textTransform: "uppercase"
  },
  View_4_4300: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_4_4300: {
    color: "rgba(31, 34, 41, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.0015999999595806003,
    textTransform: "uppercase"
  },
  View_4_4301: {
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_4_4301: {
    color: "rgba(130, 134, 145, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.00019999999494757503,
    textTransform: "none"
  },
  View_4_4302: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_4_4302: {
    color: "rgba(130, 134, 145, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.00019999999494757503,
    textTransform: "none"
  },
  View_4_4303: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("6%")
  },
  View_4_4304: {
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4304: {
    color: "rgba(0, 153, 255, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4305: {
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4_4305: {
    color: "rgba(0, 153, 255, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4306: {
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4306: {
    color: "rgba(130, 134, 145, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4307: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4_4307: {
    color: "rgba(130, 134, 145, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.00019999999494757503,
    textTransform: "none"
  },
  View_4_4308: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_4_4309: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4309: {
    color: "rgba(31, 34, 41, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.0015999999595806003,
    textTransform: "uppercase"
  },
  View_4_4310: {
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_4_4310: {
    color: "rgba(0, 153, 255, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4311: {
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_4_4311: {
    color: "rgba(0, 153, 255, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4312: {
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_4_4312: {
    color: "rgba(130, 134, 145, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4313: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_4_4313: {
    color: "rgba(130, 134, 145, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4314: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_4_4314: {
    color: "rgba(130, 134, 145, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.0015999999595806003,
    textTransform: "none"
  },
  View_4_4315: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("120%"),
    minHeight: hp("120%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("4%")
  },
  View_4_4316: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("120%"),
    minHeight: hp("120%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_4317: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("120%"),
    minHeight: hp("120%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_4_4318: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("110%")
  },
  View_4_4319: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(96, 91, 255, 1)"
  },
  View_4_4320: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  View_4_4321: {
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
  Text_4_4321: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4322: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("110%")
  },
  View_4_4323: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(96, 91, 255, 1)",
    borderWidth: 1
  },
  View_4_4324: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4_4324: {
    color: "rgba(96, 91, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4325: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("75%")
  },
  View_4_4326: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%")
  },
  ImageBackground_4_4327: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_4_4329: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%")
  },
  ImageBackground_4_4330: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_4331: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_4_4332: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_4335: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("1%")
  },
  View_4_4336: {
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
  Text_4_4336: {
    color: "rgba(43, 153, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4337: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%")
  },
  View_4_4338: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4338: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4339: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("1%")
  },
  View_4_4340: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4340: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4341: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_4_4342: {
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
  Text_4_4342: {
    color: "rgba(0, 104, 221, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4343: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%")
  },
  ImageBackground_4_4344: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_4_4346: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%")
  },
  ImageBackground_4_4347: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_4348: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_4_4349: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_4352: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("1%")
  },
  View_4_4353: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4353: {
    color: "rgba(43, 153, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4354: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%")
  },
  View_4_4355: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4355: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4356: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("1%")
  },
  View_4_4357: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4357: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4358: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_4_4359: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4359: {
    color: "rgba(0, 104, 221, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4360: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%")
  },
  ImageBackground_4_4361: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_4_4363: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%")
  },
  ImageBackground_4_4364: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_4365: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_4_4366: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_4369: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("1%")
  },
  View_4_4370: {
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
  Text_4_4370: {
    color: "rgba(43, 153, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4371: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("1%")
  },
  View_4_4372: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4372: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4373: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("1%")
  },
  View_4_4374: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4374: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4375: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_4_4376: {
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
  Text_4_4376: {
    color: "rgba(0, 104, 221, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4377: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  View_4_4378: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%")
  },
  View_4_4379: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4379: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_4380: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_4_4381: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%")
  },
  View_4_4382: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4382: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_4383: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_4_4384: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%")
  },
  View_4_4385: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4385: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_4386: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_4_4387: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_4388: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4388: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_4389: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_4_4390: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%")
  },
  View_4_4391: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(96, 91, 255, 1)"
  },
  View_4_4392: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_4_4393: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_4396: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_4_4397: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4397: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4398: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("61%")
  },
  View_4_4399: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%")
  },
  View_4_4400: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_4_4401: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 251, 1)"
  },
  View_4_4402: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%")
  },
  View_4_4403: {
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
  Text_4_4403: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4404: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("6%")
  },
  ImageBackground_4_4405: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_4408: {
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
  View_4_4409: {
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
  Text_4_4409: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4410: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_4411: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_4_4412: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 251, 1)"
  },
  View_4_4413: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%")
  },
  View_4_4414: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4414: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4415: {
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
  View_4_4416: {
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
  Text_4_4416: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4417: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("48%")
  },
  View_4_4418: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_4_4419: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 251, 1)"
  },
  View_4_4420: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%")
  },
  View_4_4421: {
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
  Text_4_4421: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4422: {
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
  View_4_4423: {
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
  Text_4_4423: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4424: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("34%")
  },
  View_4_4425: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_4_4426: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 251, 1)"
  },
  View_4_4427: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%")
  },
  View_4_4428: {
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
  Text_4_4428: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4429: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("6%")
  },
  View_4_4430: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_4431: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_4438: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_4439: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_4440: {
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
  View_4_4441: {
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
  Text_4_4441: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4442: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("34%")
  },
  View_4_4443: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_4_4444: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 251, 1)"
  },
  View_4_4445: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%")
  },
  View_4_4446: {
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
  Text_4_4446: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4447: {
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
  View_4_4448: {
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
  Text_4_4448: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4449: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("11%")
  },
  View_4_4450: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 251, 1)"
  },
  ImageBackground_4_4451: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_4_4456: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%")
  },
  View_4_4457: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4457: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4458: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("128%"),
    minHeight: hp("128%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_4459: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("128%"),
    minHeight: hp("128%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_4_4460: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("104%"),
    minHeight: hp("104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%")
  },
  View_4_4461: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("98%")
  },
  View_4_4462: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_4463: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 247, 248, 1)"
  },
  View_4_4464: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 199, 212, 1)"
  },
  ImageBackground_4_4465: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_4466: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  View_4_4467: {
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
  Text_4_4467: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4468: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4_4468: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4469: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%")
  },
  ImageBackground_4_4470: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_4473: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("67%")
  },
  ImageBackground_4_4474: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_4_4475: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(128, 171, 255, 1)"
  },
  ImageBackground_4_4476: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_4_4477: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("20%"),
    backgroundColor: "rgba(96, 91, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_4_4478: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_4_4478: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_4479: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("15%")
  },
  View_4_4480: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("52%")
  },
  View_4_4481: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4481: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4482: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4_4483: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_4484: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_4487: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("44%")
  },
  View_4_4488: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4488: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4489: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4_4490: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_4491: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_4494: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("37%")
  },
  View_4_4495: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4495: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4496: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    backgroundColor: "rgba(209, 26, 42, 1)"
  },
  View_4_4497: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_4_4497: {
    color: "rgba(209, 26, 42, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4498: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4_4499: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_4500: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_4501: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_4504: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_4_4505: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("29%")
  },
  View_4_4506: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4506: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4507: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4_4508: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_4509: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_4510: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_4517: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_4518: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_4519: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("22%")
  },
  View_4_4520: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4520: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4521: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4_4522: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_4_4523: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_4524: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_4_4528: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_4529: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%")
  },
  View_4_4530: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4_4530: {
    color: "rgba(96, 91, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4531: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 0,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 0
  },
  View_4_4532: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  ImageBackground_4_4533: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_4536: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("7%")
  },
  View_4_4537: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4537: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4538: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_4_4539: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_4540: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_4545: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_4_4546: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_4_4546: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_4547: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_4548: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_4_4553: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("7%")
  },
  View_4_4554: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_4555: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_4558: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  ImageBackground_4_4559: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  View_4_4560: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_4561: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_4_4564: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  ImageBackground_4_4565: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  View_4_4566: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_4_4566: {
    color: "rgba(3, 2, 41, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
