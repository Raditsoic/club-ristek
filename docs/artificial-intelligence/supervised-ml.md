---
sidebar_position: 6
---

# ML: Supervised Learning

Machine Learning: Supervised Learning

## What is Supervised Learning?

Supervised Learning didefinisikan sebagai model yang belajar menggunakan data berlabel, dimana setiap contoh pelatihan dipasangkan dengan label output yang benar. Tujuannya adalah mempelajari hubungan dari input ke output sehingga dapat memprediksi dan memetakan label untuk data yang baru.

## Types of Supervised Learning

### Regression

Regresi merupakan suatu masalah yang melibatkan prediksi nilai numerik yang kontinyu. Output dari model regresi adalah model bisa memprediksi nilai dari input yang diberikan. Contohnya:
- Prediksi harga rumah
- Prediksi harga Cryptocurrency
- Prediksi jumlah panen kebun apel

Contoh model dari regresi antara lain:
- Linear Regression
- Ridge & Lasso Regression
- Decision Tree Regressor
- Random Forest Regressor

### Classification

Seperti namanya, model klasifikasi ditunjukkan untuk mengkaslifikasikan suatu input kedalam suatu katergori. Label pada model klasifikasi harus berbentuk data kategorikal. Contoh penggunaan model klasifikasi:
- Deteksi Spam pada Email
- Diagnosa Penyakit
- Analisis Sentimen

Contoh model klasifikasi antara lain:
- Logistic Regression
- K-Nearest-Neighbors
- Decision Tree Classifier
- Support Vector Machine
- Random Forest Classifier

## Steps in Regression

### Data Collection

Data yang kita gunakan bisa berasal dari mana saja dan berbentuk apapun. Namun, pada blog ini kita akan menggunakan dataset dari kaggle <a src="https://www.kaggle.com/datasets/stealthtechnologies/regression-dataset-for-household-income-analysis">berikut</a>.

Pada dataset ini kita akan memprediksi pendapatan setiap kepala keluarga dengan memanfaatkan beberapa fitur diantaranya adalah:
- Umur
- Level Edukasi
- Pekerjaan
- Jumlah Tanggungan
- Lokasi
- Pengalaman Kerja
- Status Pernikahan
- Status Pekerjaan
- Jumlah Anggota Keluarga
- Status Rumah
- Tipe Rumah
- Transportasi Utama

### Data Cleaning

Tahap pertama kita harus memastikan data yang kita miliki dan tidak memiliki nilai yang hilang disetiap kolomnya. Untuk itu kita bisa memastikannya dengan teknik *Handling Missing Value*

```python
import pandas as pd

data = pd.read_csv('data.csv')
data.isna().sum()
```

Pada data tersebut tidak ada data yang hilang, sehingga kita bisa masuk ke proses selanjutnya.

### Data Visualization

Visualisasi data diperlukan agar kita memahami data yang kita miliki dan bisa membuat kita memutuskan model dan teknik seperti apa yang akan kita gunakan.

#### Numerical Data Visualization

```python
numerical_cols = ['Age', 'Number_of_Dependents', 'Work_Experience', 'Household_Size', 'Income']

for col in numerical_cols:
    plt.figure(figsize=(7,5))
    sns.histplot(data[col], kde=True)
    plt.title(f'Distribution of {col}')
    plt.show()
```
#### Categorical Data Visualization

```python
categorical_cols = ['Education_Level', 'Occupation', 'Location', 'Marital_Status',
                    'Employment_Status', 'Homeownership_Status', 'Type_of_Housing', 
                    'Gender', 'Primary_Mode_of_Transportation']

for col in categorical_cols:
    plt.figure(figsize=(7,5))
    sns.countplot(x=col, data=data)
    plt.title(f'Count of {col}')
    plt.xticks(rotation=45)
    plt.show()
``` 

### Data Preprocessing

#### Encoding

Encoding adalah proses mengubah data kategorikal teks, ke dalam bentuk numerik. Encoding ada beberapa macam seperti LabelEncoder, OneHotEncoder, dan yang lainnya. Kali ini kita akan menggunakan LabelEncoder

```python
from sklearn.preprocessing import LabelEncoder

X = data.drop('Income', axis=1)
y = data['Income']

categorical_cols = ['Education_Level', 'Occupation', 'Location', 'Marital_Status',
                    'Employment_Status', 'Homeownership_Status', 'Type_of_Housing', 
                    'Gender', 'Primary_Mode_of_Transportation']

numerical_cols = ['Age', 'Number_of_Dependents', 'Work_Experience', 'Household_Size']

label_encoders = {col: LabelEncoder() for col in categorical_cols}
for col in categorical_cols:
    X[col] = label_encoders[col].fit_transform(X[col])
```

#### Scaling

Scaling adalah proses menskalakan fitur numerik agar jarak antara fitur tidak terlalu jauh dengan tetap menjaga hubungan nilai yang sama.

```python
from sklearn.preprocessing import StandardScaler
from sklearn.compose import ColumnTransformer

scaler = StandardScaler()
preprocessor = ColumnTransformer(
    transformers=[
        ('num', scaler, numerical_cols)
    ])

X_preprocessed = preprocessor.fit_transform(X)

X_preprocessed = pd.DataFrame(X_preprocessed, columns=numerical_cols)
X_encoded = pd.concat([X_preprocessed, X[categorical_cols]], axis=1)
```

### Correlation Matrix

Correlation Matrix digunakan untuk melihat korelasi atau hubungan fitur satu dengan fitur yang lain. Correlation Matrix sangat berguna untuk memilih fitur yang akan digunakan atau biasanya disebut *Feature Engineering*.

```python
import seaborn as sns

plt.figure(figsize=(16, 10))
sns.heatmap(X_encoded.corr(), annot=True, cmap='coolwarm', linewidths=0.5)
plt.title('Correlation Matrix Heatmap')
plt.show()
```

### Splitting

Splitting adalah proses untuk membagi data menjadi *Test Set* dan *Training Set*. Selain itu ada pula *Dev Set* atau *Validation Set* yang digunakan untuk memvalidasi kembali hasil training yang telah dilakukan. Pada kali ini kita hanya menggunakan *Training Set* dan *Test Set*.

```python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X_encoded, y, test_size=0.2, random_state=42)
```

### Modelling

Modelling adalah proses untuk memilih model hingga training model. Pada tahap ini kita juga bisa memilihi hyperparameter model yang kita gunakan. Pada blog ini kita akan menggunakan beberapa model yaitu Linear Regression, Decision Tree Regressor, Random Forest Regressor, dan Gradient Boosting Regressor.

#### Linear Regression

```python
from sklearn.linear_model import LinearRegression

lr_model = LinearRegression()

lr_model.fit(X_train, y_train)
```

#### Decision Tree Regressor

```python
from sklearn.tree import DecisionTreeRegressor

dt_model = DecisionTreeRegressor(random_state=42)

dt_model.fit(X_train, y_train)
```

#### Random Forest Regressor

```python
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor

rf_model = RandomForestRegressor(random_state=42)

rf_model.fit(X_train, y_train)
```

#### Gradient Boosting Regressor

```python
gb_model = GradientBoostingRegressor(random_state=42)

gb_model.fit(X_train, y_train)
```

### Evaluasi

Kita perlu mengukur performa model yang telah kita buat, apakah model tersebut sudah cukup baik atau perlu dilakukan perbaikan kembali. Dengan evaluasi kita juga bisa membandingkan model satu dengan yang lain. Pada proses evalusi model regresi kita bisa menggunakan metrik seperti *Mean Squared Error*, *R2*, *Mean Absolute Error* dan lainnya.

```python
def evaluate_model(model, X_test, y_test):
    predictions = model.predict(X_test)
    mse = mean_squared_error(y_test, predictions)
    rmse = np.sqrt(mse)  
    mae = mean_absolute_error(y_test, predictions)
    r2 = r2_score(y_test, predictions)
    return mse, rmse, mae, r2

lr_mse, lr_rmse, lr_mae, lr_r2 = evaluate_model(lr_model, X_test, y_test)
print(f'Linear Regression - MSE: {lr_mse}, RMSE: {lr_rmse}, MAE: {lr_mae}, R2: {lr_r2}')

dt_mse, dt_rmse, dt_mae, dt_r2 = evaluate_model(dt_model, X_test, y_test)
print(f'Decision Tree Regressor - MSE: {dt_mse}, RMSE: {dt_rmse}, MAE: {dt_mae}, R2: {dt_r2}')

rf_mse, rf_rmse, rf_mae, rf_r2 = evaluate_model(rf_model, X_test, y_test)
print(f'Random Forest Regressor - MSE: {rf_mse}, RMSE: {rf_rmse}, MAE: {rf_mae}, R2: {rf_r2}')

gb_mse, gb_rmse, gb_mae, gb_r2 = evaluate_model(gb_model, X_test, y_test)
print(f'Gradient Boosting Regressor - MSE: {gb_mse}, RMSE: {gb_rmse}, MAE: {gb_mae}, R2: {gb_r2}')

models = ['Linear Regression', 'Decision Tree Regressor', 'Random Forest Regressor', 'Gradient Boosting Regressor']
mses = [lr_mse, dt_mse, rf_mse, gb_mse]
rmses = [lr_rmse, dt_rmse, rf_rmse, gb_rmse]
maes = [lr_mae, dt_mae, rf_mae, gb_mae]
r2s = [lr_r2, dt_r2, rf_r2, gb_r2]

comparison = pd.DataFrame({'Model': models, 'MSE': mses, 'RMSE': rmses, 'MAE': maes, 'R2': r2s})
print(comparison)
```

## Steps in Classification

### Data Collection

Data yang kita gunakan bisa berasal dari mana saja dan berbentuk apapun. Namun, pada blog ini kita akan menggunakan dataset dari kaggle <a src="https://www.kaggle.com/datasets/iammustafatz/diabetes-prediction-dataset">berikut</a>.

Pada dataset ini kita akan memprediksi seseorang mengidap diabetes atau tidak dengan memanfaatkan beberapa fitur diantaranya adalah:
- Umur
- Gender
- BMI
- Sejarah Merokok
- Hipertensi
- Penyakit Jantung
- Kadar Gula

### Data Cleaning

#### Handle Missing Values

```python
df.isnull().sum()
```
#### Handle Duplicate

```python
print(f"Duplicate: {df.duplicated().sum()}")
df = df.drop_duplicates()
```

### Data Visualization

```python
def add_counts(ax):
    for p in ax.patches:
        ax.annotate(f'{int(p.get_height())}', (p.get_x() + p.get_width() / 2., p.get_height()), 
                    ha='center', va='center', fontsize=10, color='black', xytext=(0, 5), 
                    textcoords='offset points')

fig, axes = plt.subplots(3, 2, figsize=(15, 15))

# Plot gender grouped by diabetes
ax = sns.countplot(ax=axes[0, 0], x='gender', hue='diabetes', data=df)
axes[0, 0].set_title('Gender grouped by Diabetes')
add_counts(ax)

# Plot hypertension grouped by diabetes
ax = sns.countplot(ax=axes[0, 1], x='hypertension', hue='diabetes', data=df)
axes[0, 1].set_title('Hypertension grouped by Diabetes')
add_counts(ax)

# Plot heart disease grouped by diabetes
ax = sns.countplot(ax=axes[1, 0], x='heart_disease', hue='diabetes', data=df)
axes[1, 0].set_title('Heart Disease grouped by Diabetes')
add_counts(ax)

# Plot smoking history grouped by diabetes
ax = sns.countplot(ax=axes[1, 1], x='smoking_history', hue='diabetes', data=df)
axes[1, 1].set_title('Smoking History grouped by Diabetes')
add_counts(ax)

# Plot diabetes
ax = sns.countplot(ax=axes[2, 0], x='diabetes', data=df)
axes[2, 0].set_title('Diabetes Count')
add_counts(ax)

# Create pie plot for diabetes
diabetes_counts = df['diabetes'].value_counts()
axes[2, 1].pie(diabetes_counts, labels=diabetes_counts.index, autopct='%1.1f%%', startangle=90)
axes[2, 1].set_title('Diabetes Distribution')
axes[2, 1].axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.
axes[2, 1].legend(title='Diabetes:', loc='upper right')

plt.tight_layout()
plt.show()
```

```python
min_age = df['age'].min()
max_age = df['age'].max()
avg_age = df['age'].mean()

# Count of individuals with and without diabetes
diabetes_counts = df['diabetes'].value_counts()

# Group by diabetes status and calculate min and max ages
grouped_ages = df.groupby('diabetes')['age'].agg(['min', 'max'])

print(f"Minimum age: {min_age}")
print(f"Maximum age: {max_age}")
print(f"Average age: {avg_age}")
print("Diabetes Counts:")
print(diabetes_counts)
print("Age Statistics by Diabetes Status:")
print(grouped_ages)

fig, ax = plt.subplots(1, 2, figsize=(14, 6))

# Plot for overall min, max, and average age
bars = ax[0].bar(['Min Age', 'Max Age', 'Avg Age'], [min_age, max_age, avg_age], color=['blue', 'red', 'green'])
ax[0].set_title('Overall Age Statistics')
ax[0].set_ylabel('Age')

# Annotate bars with their values
for bar in bars:
    yval = bar.get_height()
    ax[0].text(bar.get_x() + bar.get_width()/2, yval, round(yval, 2), va='bottom')  # Add text to the top of the bars

# Plot for min and max ages grouped by diabetes status
grouped_bars = grouped_ages.plot(kind='bar', ax=ax[1])
ax[1].set_title('Age Statistics by Diabetes Status')
ax[1].set_ylabel('Age')

# Annotate bars with their values
for p in grouped_bars.patches:
    grouped_bars.annotate(str(p.get_height()), (p.get_x() * 1.005, p.get_height() * 1.005))

plt.tight_layout()
plt.show()
```

### Data Preprocessing

#### Encoding

```python
from sklearn.preprocessing import LabelEncoder
le = LabelEncoder()
df['gender'] = le.fit_transform(df['gender'])
df['smoking_history'] = le.fit_transform(df['smoking_history'])
```

#### Scaling

```python
features = ['gender', 'age', 'hypertension', 'heart_disease', 'smoking_history', 'bmi', 'HbA1c_level', 'blood_glucose_level']
X = df[features]
y = df['diabetes']

# Standardizing the features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)
```

#### Pricipal Component Analysis (PCA)

```python
pca = PCA()
X_pca = pca.fit_transform(X_scaled)

# Plotting the cumulative explained variance
plt.figure(figsize=(10, 6))
plt.plot(range(1, len(pca.explained_variance_ratio_) + 1), 
         pca.explained_variance_ratio_.cumsum(), marker='o', linestyle='--')
plt.title('Explained Variance by Number of Principal Components')
plt.xlabel('Number of Principal Components')
plt.ylabel('Cumulative Explained Variance')
plt.grid()

# Find the index of the maximum cumulative explained variance
max_index = pca.explained_variance_ratio_.cumsum().argmax()

# Annotate the point with the highest cumulative explained variance
plt.annotate(f'Max: PC {max_index + 1}',
             xy=(max_index + 1, pca.explained_variance_ratio_.cumsum()[max_index]),
             xytext=(max_index + 2, pca.explained_variance_ratio_.cumsum()[max_index] - 0.05),
             arrowprops=dict(facecolor='black', arrowstyle='->', color='black'))

plt.show()

# Printing explained variance ratios
for i, ratio in enumerate(pca.explained_variance_ratio_.cumsum()):
    print(f'Principal Component {i+1}: {ratio:.4f} cumulative explained variance')

# Choose the number of components that explain most of the variance
n_components = max_index + 1

# Applying PCA with the optimal number of components
pca = PCA(n_components=n_components)
X_pca = pca.fit_transform(X_scaled)
```

#### Splitting

```python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X_pca, y, test_size=0.2, random_state=42)
```

### Modelling

```python
from xgboost import XGBoostClassifier

xgb_model = XGBClassifier(random_state=42)
xgb_model.fit(X_train, y_train)

# Making predictions
y_pred = xgb_model.predict(X_test)
```

### Evaluate

```python
# Evaluating the model
accuracy = accuracy_score(y_test, y_pred)
print(f'XGBoost Accuracy: {accuracy:.4f}')
conf_matrix = confusion_matrix(y_test, y_pred)

# Plotting the confusion matrix
plt.figure(figsize=(8, 6))
sns.heatmap(conf_matrix, annot=True, fmt='d', cmap='Blues', xticklabels=['No Diabetes', 'Diabetes'], yticklabels=['No Diabetes', 'Diabetes'])
plt.title('Confusion Matrix')
plt.xlabel('Predicted')
plt.ylabel('Actual')
plt.show()
```



