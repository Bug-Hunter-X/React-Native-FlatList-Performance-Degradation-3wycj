The solution involves correctly implementing the `keyExtractor` prop in the FlatList component and using optimization props. This ensures that FlatList only renders the visible items and re-renders only when necessary.  The `keyExtractor` should return a unique ID for each item in the dataset. The `windowSize` prop controls how many items are rendered around the visible area, while `initialNumToRender` sets the initial number of items to render.

```javascript
<FlatList
  data={data}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => <Text>{item.text}</Text>}
  windowSize={10}
  initialNumToRender={10}
/>
```