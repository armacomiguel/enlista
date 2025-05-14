import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import CategoryShop from 'components/CategoryShop';
import { CAT } from 'constans/product.static';

const Super = () => {
  return (
   <SafeAreaView className='h-full bg-blue-strong1'>
      <StatusBar barStyle={'light-content'} animated={true} backgroundColor="#1D2730" />
      <ScrollView className='h-full flex-col gap-4 mt-11' contentContainerStyle={{
          alignItems: 'center', 
          // justifyContent:"center", 
        }}>
        <View className='flex-row flex-wrap gap-4 items-center justify-evenly'>
        {CAT.map((cat) => (
          <CategoryShop key={cat.categoryId} id={cat.categoryId} title={cat.name} type={1}/>
        ))}
        {/* <CategoryShop id={2} title="Fruta" type={1}/>
        <CategoryShop id={3} title="Verdura" type={2}/>
        <CategoryShop id={4} title="Higiene" type={1}/> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Super;